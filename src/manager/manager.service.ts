import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as crypto from 'crypto';
import { Model } from 'mongoose';
import { AccessToken, AccessTokenDocument } from 'src/schemas/accesstoken.schema';
// import { Admin, AdminDocument } from 'src/schemas/admin.schema';
import { FoodItem, FoodItemDocument } from 'src/schemas/fooditem.schema';
import { Meal, MealDocument } from 'src/schemas/meal.schema';
import { MealToken, MealTokenDocument } from 'src/schemas/mealtoken.schema';
import { RawMaterial, RawMaterialDocument } from 'src/schemas/rawmaterial.schema';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class ManagerService {
	constructor(
		@InjectModel(AccessToken.name)
		private accessTokenModel: Model<AccessTokenDocument>,
		// @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
		@InjectModel(FoodItem.name) private foodItemModel: Model<FoodItemDocument>,
		@InjectModel(Meal.name) private mealModel: Model<MealDocument>,
		@InjectModel(MealToken.name)
		private mealTokenModel: Model<MealTokenDocument>,
		@InjectModel(RawMaterial.name)
		private rawMaterialModel: Model<RawMaterialDocument>,
		@InjectModel(User.name) private userModel: Model<UserDocument>,
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
			return this.mealModel.find({ end_time: { $lt: date } }).limit(0 - limit);
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
		const m = await this.mealModel.findById(meal_id).select('_id');
		if (!m) {
			return null;
		}
		const users = await this.userModel.find({ isActive: true }).select('_id');
		const doc = users.map((u) => new this.mealTokenModel({ user_id: u, meal_id: m, status: status }));
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
}
