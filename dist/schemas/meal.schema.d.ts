import mongoose from 'mongoose';
import { FoodItem } from './fooditem.schema';
export declare class Meal {
    mess: string;
    name: string;
    start_time: Date;
    end_time: Date;
    capacity: number;
    price: number;
    fooditem_ids: FoodItem[];
}
export declare type MealDocument = Meal & Document;
export declare const MealSchema: mongoose.Schema<Meal, mongoose.Model<Meal, any, any, any, any>, {}, {}, {}, {}, "type", Meal>;
