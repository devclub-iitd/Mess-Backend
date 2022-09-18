import mongoose from 'mongoose';
import { RawMaterial } from './rawmaterial.schema';
export declare class FoodItem {
    name: string;
    rawmaterial_ids: RawMaterial[];
}
export declare type FoodItemDocument = FoodItem & Document;
export declare const FoodItemSchema: mongoose.Schema<FoodItem, mongoose.Model<FoodItem, any, any, any, any>, {}, {}, {}, {}, "type", FoodItem>;
