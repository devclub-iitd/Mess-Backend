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
		const accessTokens = await this.accessTokenModel.aggregate([
			{ $match: { token: token } },
			{
				$lookup: {
					from: 'users',
					as: 'users',
					localField: 'user_id',
					foreignField: '_id',
					let: { token_user_id: '$user_id' },
					pipeline: [
						{
							$lookup: {
								from: 'meals',
								as: 'meals',
								pipeline: [
									{
										$match: {
											$and: [{ start_time: { $lt: new Date() } }, { end_time: { $gt: new Date() } }],
										},
									},
									{
										$lookup: {
											from: 'mealtokens',
											as: 'mealtokens',
											localField: '_id',
											foreignField: 'meal_id',
											pipeline: [{ $match: { $expr: { $eq: ['$$token_user_id', '$user_id'] } } }],
										},
									},
								],
							},
						},
					],
				},
			},
		]);
		// No such token as requested
		if (accessTokens.length === 0) return 0;
		// Token doesn't have any user?
		if (accessTokens[0].users.length === 0) return 0;

		const user = accessTokens[0].users[0];
		// Kerberos doesn't match with request
		if (user.kerberos !== kerberos) return -1;

		return {
			token: {
				user_id: {
					name: user.name,
					kerberos: user.kerberos,
					hostel: user.hostel,
					isActive: user.isActive,
				},
			},
			active_meals: user.meals.flatMap((meal: any) =>
				meal.mealtokens.map((mealtoken: any) => ({
					_id: mealtoken._id,
					status: mealtoken.status,
					enter_time: mealtoken.enter_time,
					meal_id: {
						name: meal.name,
						start_time: meal.start_time,
						end_time: meal.end_time,
					},
				})),
			),
		};
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
		const a = new Date();
		const doc = await this.mealTokenModel.findById(id);
		const b = new Date();
		console.log('mealTokenModel.findById(id)', b.valueOf() - a.valueOf());
		if (!doc) {
			return 0;
		}
		if (doc.status === 'USED') {
			return -1;
		}
		if (doc.status === 'REBATE') {
			return -2;
		}
		doc.status = 'USED';
		doc.enter_time = new Date();
		return doc.save();
	}
}
