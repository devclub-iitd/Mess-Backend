import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccessToken, AccessTokenDocument } from 'src/schemas/accesstoken.schema';
import { Meal, MealDocument } from 'src/schemas/meal.schema';
import { MealToken, MealTokenDocument } from 'src/schemas/mealtoken.schema';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class StaffService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
		@InjectModel(AccessToken.name)
		private accessTokenModel: Model<AccessTokenDocument>,
		@InjectModel(MealToken.name)
		private mealTokenModel: Model<MealTokenDocument>,
		@InjectModel(Meal.name) private mealModel: Model<MealDocument>,
	) {}

	async verifyToken(kerberos: string, token: string) {
		const u = await this.userModel.findOne({ kerberos: kerberos });
		const t = await this.accessTokenModel.findOne({ token: token });
		if (!u || !t) {
			return 0;
		}
		await t.populate('user_id');
		if (u.kerberos === t.user_id.kerberos && t.isActive) {
			const active = await this.mealModel.find({
				end_time: { $gt: new Date() },
				start_time: { $lt: new Date() },
			});
			const doc = await this.mealTokenModel.find({
				user_id: u,
				meal_id: active,
			});
			return { token: t, active_meals: doc };
		}
		return -1;
	}

	async verifyWithoutToken(kerberos: string) {
		const u = await this.userModel.findOne({ kerberos: kerberos });
		if (!u) {
			return null;
		}
		const t = await this.accessTokenModel.find({ user_id: u });
		const active = await this.mealModel.find({
			end_time: { $gt: new Date() },
			start_time: { $lt: new Date() },
		});
		const doc = await this.mealTokenModel.find({
			user_id: u,
			meal_id: active,
		});
		return { user: u, tokens: t, active_meals: doc };
	}

	async getMealTokens(kerberos: string) {
		const u = await this.userModel.findOne({ kerberos: kerberos });
		return this.mealTokenModel.find({ user_id: u }).populate('meal_id');
	}

	async useMealToken(id: string) {
		const doc = await this.mealTokenModel.findById(id);
		if (!doc) {
			return 0;
		}
		if (doc.status === 'USED') {
			return -1;
		}
		doc.status = 'USED';
		doc.enter_time = new Date();
		return doc.save();
	}
}
