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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ManagerService } from './manager.service';
export declare class ManagerController {
    private readonly managerService;
    constructor(managerService: ManagerService);
    createUser(body: any): Promise<import("mongoose").Document<unknown, any, import("../schemas/user.schema").UserDocument> & import("../schemas/user.schema").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUsers(): Promise<{
        id: any;
        name: string;
        hostel: string;
        kerberos: string;
        isActive: boolean;
    }[]>;
    createAccessToken(body: any): Promise<import("mongoose").Document<unknown, any, import("../schemas/accesstoken.schema").AccessTokenDocument> & import("../schemas/accesstoken.schema").AccessToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAccessTokens(query: any): Promise<Omit<import("mongoose").Document<unknown, any, import("../schemas/accesstoken.schema").AccessTokenDocument> & import("../schemas/accesstoken.schema").AccessToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    createMeal(body: any): Promise<import("mongoose").Document<unknown, any, import("../schemas/meal.schema").MealDocument> & import("../schemas/meal.schema").Meal & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getMeals(query: any): Promise<(import("mongoose").Document<unknown, any, import("../schemas/meal.schema").MealDocument> & import("../schemas/meal.schema").Meal & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createMealToken(body: any): Promise<import("mongoose").Document<unknown, any, import("../schemas/mealtoken.schema").MealTokenDocument> & import("../schemas/mealtoken.schema").MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    bulkCreateMealToken(body: any): Promise<(Omit<import("mongoose").MergeType<import("../schemas/mealtoken.schema").MealTokenDocument, import("mongoose").Document<unknown, any, import("../schemas/mealtoken.schema").MealTokenDocument> & import("../schemas/mealtoken.schema").MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>, keyof Document | "_id" | keyof import("../schemas/mealtoken.schema").MealToken> & import("../schemas/mealtoken.schema").MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    getMealTokens(query: any): Promise<Omit<import("mongoose").Document<unknown, any, import("../schemas/mealtoken.schema").MealTokenDocument> & import("../schemas/mealtoken.schema").MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
}
