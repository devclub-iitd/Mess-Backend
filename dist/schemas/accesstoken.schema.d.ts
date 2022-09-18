import mongoose from 'mongoose';
import { User } from './user.schema';
export declare class AccessToken {
    user_id: User;
    token: string;
    created_time: Date;
    isActive: boolean;
    scope: string;
}
export declare type AccessTokenDocument = AccessToken & Document;
export declare const AccessTokenSchema: mongoose.Schema<AccessToken, mongoose.Model<AccessToken, any, any, any, any>, {}, {}, {}, {}, "type", AccessToken>;
