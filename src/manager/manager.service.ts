import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as crypto from 'crypto';
import { Model } from 'mongoose';
import { AccessToken, AccessTokenDocument } from 'src/schemas/accesstoken.schema';
import { Admin, AdminDocument } from 'src/schemas/admin.schema';
import { FoodItem, FoodItemDocument } from 'src/schemas/fooditem.schema';
import { Meal, MealDocument } from 'src/schemas/meal.schema';
import { MealToken, MealTokenDocument } from 'src/schemas/mealtoken.schema';
import { RawMaterial, RawMaterialDocument } from 'src/schemas/rawmaterial.schema';
import { Rebate, RebateDocument } from 'src/schemas/rebate.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
import { parseRebate } from 'src/utils/parseExcel';

@Injectable()
export class ManagerService {
	constructor(
		@InjectModel(AccessToken.name)
		private accessTokenModel: Model<AccessTokenDocument>,
		@InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
		@InjectModel(FoodItem.name) private foodItemModel: Model<FoodItemDocument>,
		@InjectModel(Meal.name) private mealModel: Model<MealDocument>,
		@InjectModel(MealToken.name)
		private mealTokenModel: Model<MealTokenDocument>,
		@InjectModel(RawMaterial.name)
		private rawMaterialModel: Model<RawMaterialDocument>,
		@InjectModel(User.name) private userModel: Model<UserDocument>,
		@InjectModel(Rebate.name) private rebateModel: Model<RebateDocument>,
	) {}

	async createUser(kerberos: string, name: string, hostel: string) {
		const check = await this.userModel.findOne({ kerberos: kerberos });
		if (check) {
			return null;
		}
		const doc = new this.userModel({
			kerberos: kerberos,
			name: name,
			hostel: hostel,
			isActive: true,
		});
		return doc.save();
	}

	async getUsers() {
		const doc = await this.userModel.find();
		return doc.map((d) => ({
			id: d.id,
			name: d.name,
			hostel: d.hostel,
			kerberos: d.kerberos,
			isActive: d.isActive,
		}));
	}

	async createAccessToken(kerberos: string, scope: string) {
		const u = await this.userModel.findOne({ kerberos: kerberos }).select('_id');
		if (!u) {
			return null;
		}
		scope = scope || 'full';
		const seed = crypto.randomUUID() + kerberos + new Date().toDateString;
		const token = crypto.createHash('sha256').update(seed).digest('hex');
		const doc = new this.accessTokenModel({
			user_id: u,
			token: token,
			created_time: new Date(),
			isActive: true,
			scope: scope,
		});
		return doc.save();
	}

	async getAccessTokens(kerberos: string) {
		const u = await this.userModel.findOne({ kerberos: kerberos }).select('_id');
		if (!u) {
			return null;
		}
		return this.accessTokenModel.find({ user_id: u }).populate('user_id');
	}

	async createMeal(
		mess: string,
		name: string,
		start_time: Date,
		end_time: Date,
		capacity: number,
		price: number,
		fooditem_ids: string[],
	) {
		if (end_time < start_time) {
			return null;
		}
		const doc = new this.mealModel({
			mess: mess,
			name: name,
			start_time: start_time,
			end_time: end_time,
			capacity: capacity,
			price: price,
			fooditem_ids: fooditem_ids,
		});
		return doc.save();
	}

	async getMeals(limit: number, date: Date) {
		date = date || new Date();
		if (limit === 0) {
			return this.mealModel.find({
				end_time: { $gt: date },
				start_time: { $lt: date },
			});
		} else if (limit > 0) {
			return this.mealModel.find({ start_time: { $gt: date } }).limit(limit);
		} else {
			return this.mealModel
				.find({ end_time: { $lt: date } })
				.sort({ end_time: -1 })
				.limit(0 - limit);
		}
	}

	async createMealToken(kerberos: string, meal_id: string, status: string) {
		status = status || 'BOOKED';
		const u = await this.userModel.findOne({ kerberos: kerberos }).select('_id');
		const m = await this.mealModel.findById(meal_id).select('_id');
		if (!u || !m) {
			return null;
		}
		const doc = new this.mealTokenModel({
			user_id: u,
			meal_id: m,
			status: status,
		});
		return doc.save();
	}

	async bulkCreateMealToken(meal_id: string, status: string) {
		status = status || 'BOOKED';
		const meal = await this.mealModel.findById(meal_id).select(['_id', 'end_time', 'start_time']);
		if (!meal) {
			return null;
		}
		const users = await this.userModel.find({ isActive: true }).select('_id');
		const rebates = await this.rebateModel
			.find({
				from_date: { $lt: meal.end_time },
				to_date: { $gt: meal.start_time },
			})
			.lean();

		// TODO: Optimise with pipeline
		const doc = users
			.filter((user) => !rebates.find((rebate) => String(rebate.user_id) === String(user._id)))
			.map((user) => new this.mealTokenModel({ user_id: user, meal_id: meal, status: status }));

		return this.mealTokenModel.insertMany(doc);
	}

	async getMealTokens(kerberos: string, meal_id: string) {
		if (kerberos && meal_id) {
			const u = await this.userModel.findOne({ kerberos: kerberos });
			return this.mealTokenModel.find({ user_id: u, meal_id: meal_id }).populate(['meal_id', 'user_id']);
		} else if (kerberos) {
			const u = await this.userModel.findOne({ kerberos: kerberos });
			return this.mealTokenModel.find({ user_id: u }).populate(['meal_id', 'user_id']);
		} else if (meal_id) {
			return this.mealTokenModel.find({ meal_id: meal_id }).populate(['meal_id', 'user_id']);
		}
	}

	async createRebate(
		kerberos: string,
		admin_id: string,
		rebate_application_no: number,
		from_date: Date,
		to_date: Date,
		approval_status: string,
		days?: number,
		reason?: string,
		type?: string,
		amount?: number,
	): Promise<Rebate | 0 | -1> {
		const user = await this.userModel.findOne({ kerberos }).lean();
		if (!user) return 0;
		const admin = await this.adminModel.findById(admin_id).lean();
		if (!admin) return -1;
		const old = await this.rebateModel.findOne({ rebate_application_no });
		const meals = await this.mealModel.find({ start_time: { $gt: from_date }, end_time: { $lt: to_date } }).lean();
		await this.mealTokenModel.updateMany(
			{
				user_id: user._id,
				meal_id: { $in: meals.map((meal) => meal._id) },
			},
			{ $set: { status: 'REBATE' } },
		);

		const values = {
			user_id: user._id,
			admin_id: admin._id,
			rebate_application_no,
			from_date,
			to_date,
			days,
			approval_status,
			reason,
			type,
			amount,
		};

		if (old) {
			return old.updateOne(values);
		}

		const doc = new this.rebateModel(values);
		return doc.save();
	}

	async bulkCreateRebates(admin_id: string, file_path: string) {
		const data = parseRebate(file_path);
		const queries = data.map((row) =>
			this.createRebate(
				row.kerberos,
				admin_id,
				row.rebate_application_no,
				row.from_date,
				row.to_date,
				row.approval_status,
				row.days,
				row.reason,
				row.type,
				row.amount,
			),
		);
		return Promise.all(queries);
	}

	async getRebates() {
		// TODO: Make it granular
		return this.rebateModel.find({}).populate('user_id');
	}
}
