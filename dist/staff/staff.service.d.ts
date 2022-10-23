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
import { MealDocument } from 'src/schemas/meal.schema';
import { MealToken, MealTokenDocument } from 'src/schemas/mealtoken.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
export declare class StaffService {
    private userModel;
    private accessTokenModel;
    private mealTokenModel;
    private mealModel;
    constructor(userModel: Model<UserDocument>, accessTokenModel: Model<AccessTokenDocument>, mealTokenModel: Model<MealTokenDocument>, mealModel: Model<MealDocument>);
    verifyToken(kerberos: string, token: string): Promise<-1 | 0 | {
        token: {
            user_id: {
                name: any;
                kerberos: any;
                hostel: any;
                isActive: any;
            };
        };
        active_meals: any;
    }>;
    verifyWithoutToken(kerberos: string): Promise<{
        user: import("mongoose").Document<unknown, any, UserDocument> & User & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
        tokens: (import("mongoose").Document<unknown, any, AccessTokenDocument> & AccessToken & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        active_meals: (import("mongoose").Document<unknown, any, MealTokenDocument> & MealToken & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getMealTokens(kerberos: string): Promise<Omit<import("mongoose").Document<unknown, any, MealTokenDocument> & MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    useMealToken(id: string): Promise<-1 | 0 | (import("mongoose").Document<unknown, any, MealTokenDocument> & MealToken & Document & {
        _id: import("mongoose").Types.ObjectId;
    })>;
}
