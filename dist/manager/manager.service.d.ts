/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { AccessToken, AccessTokenDocument } from 'src/schemas/accesstoken.schema';
import { AdminDocument } from 'src/schemas/admin.schema';
import { FoodItemDocument } from 'src/schemas/fooditem.schema';
import { Meal, MealDocument } from 'src/schemas/meal.schema';
import { MealToken, MealTokenDocument } from 'src/schemas/mealtoken.schema';
import { RawMaterialDocument } from 'src/schemas/rawmaterial.schema';
import { Rebate, RebateDocument } from 'src/schemas/rebate.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
export declare class ManagerService {
    private accessTokenModel;
    private adminModel;
    private foodItemModel;
    private mealModel;
    private mealTokenModel;
    private rawMaterialModel;
    private userModel;
    private rebateModel;
    constructor(accessTokenModel: Model<AccessTokenDocument>, adminModel: Model<AdminDocument>, foodItemModel: Model<FoodItemDocument>, mealModel: Model<MealDocument>, mealTokenModel: Model<MealTokenDocument>, rawMaterialModel: Model<RawMaterialDocument>, userModel: Model<UserDocument>, rebateModel: Model<RebateDocument>);
    createUser(kerberos: string, name: string, hostel: string): Promise<import("mongoose").Document<unknown, any, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUsers(): Promise<{
        id: any;
        name: string;
        hostel: string;
        kerberos: string;
        isActive: boolean;
    }[]>;
    createAccessToken(kerberos: string, scope: string): Promise<import("mongoose").Document<unknown, any, AccessTokenDocument> & AccessToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAccessTokens(kerberos: string): Promise<Omit<import("mongoose").Document<unknown, any, AccessTokenDocument> & AccessToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    createMeal(mess: string, name: string, start_time: Date, end_time: Date, capacity: number, price: number, fooditem_ids: string[]): Promise<import("mongoose").Document<unknown, any, MealDocument> & Meal & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getMeals(limit: number, date: Date): Promise<(import("mongoose").Document<unknown, any, MealDocument> & Meal & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createMealToken(kerberos: string, meal_id: string, status: string): Promise<import("mongoose").Document<unknown, any, MealTokenDocument> & MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    bulkCreateMealToken(meal_id: string, status: string): Promise<(Omit<import("mongoose").MergeType<MealTokenDocument, import("mongoose").Document<unknown, any, MealTokenDocument> & MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>, keyof Document | "_id" | keyof MealToken> & MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getMealTokens(kerberos: string, meal_id: string): Promise<Omit<import("mongoose").Document<unknown, any, MealTokenDocument> & MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    createRebate(kerberos: string, admin_id: string, rebate_application_no: number, from_date: Date, to_date: Date, approval_status: string, days?: number, reason?: string, type?: string, amount?: number): Promise<Rebate | 0 | -1>;
    bulkCreateRebates(admin_id: string, file_path: string): Promise<(0 | Rebate | -1)[]>;
    getRebates(): Promise<Omit<import("mongoose").Document<unknown, any, RebateDocument> & Rebate & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
}
