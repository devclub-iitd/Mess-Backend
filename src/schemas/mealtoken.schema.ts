import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Meal } from './meal.schema';
import { User } from './user.schema';

@Schema()
export class MealToken {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	})
	user_id: User;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Meal',
		required: true,
	})
	meal_id: Meal;

	@Prop()
	status: string;

	@Prop()
	enter_time: Date;
}

export type MealTokenDocument = MealToken & Document;
export const MealTokenSchema = SchemaFactory.createForClass(MealToken);
