import { Meal } from './meal.schema';
import { User } from './user.schema';
export declare class MealToken {
    user_id: User;
    meal_id: Meal;
    status: string;
    enter_time: Date;
}
