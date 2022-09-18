import { FoodItem } from './fooditem.schema';
export declare class Meal {
    mess: string;
    start_time: Date;
    end_time: Date;
    capacity: number;
    price: number;
    fooditem_ids: FoodItem[];
}
