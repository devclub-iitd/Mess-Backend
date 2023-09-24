import mongoose from 'mongoose';
import { User } from './user.schema';
import { Admin } from './admin.schema';
export declare class Rebate {
    user_id: User;
    admin_id: Admin;
    rebate_application_no: number;
    from_date: Date;
    to_date: Date;
    days: number;
    approval_status: string;
    reason: string;
    type: string;
    amount: number;
}
export declare type RebateDocument = Rebate & Document;
export declare const RebateSchema: mongoose.Schema<Rebate, mongoose.Model<Rebate, any, any, any, any>, {}, {}, {}, {}, "type", Rebate>;
