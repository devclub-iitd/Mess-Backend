import mongoose from 'mongoose';
import { Meal } from './meal.schema';
import { User } from './user.schema';
export declare class MealToken {
    user_id: User;
    meal_id: Meal;
    status: string;
    enter_time: Date;
}
export declare type MealTokenDocument = MealToken & Document;
export declare const MealTokenSchema: mongoose.Schema<MealToken, mongoose.Model<MealToken, any, any, any, any>, {}, {}, {}, {}, "type", MealToken>;
