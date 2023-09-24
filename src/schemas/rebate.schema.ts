import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';
import { Admin } from './admin.schema';

@Schema()
export class Rebate {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: User.name,
		required: true,
	})
	user_id: User;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: Admin.name,
		required: true,
	})
	admin_id: Admin;

	@Prop({ required: true, unique: true })
	rebate_application_no: number;

	@Prop({ required: true })
	from_date: Date;

	@Prop({ required: true })
	to_date: Date;

	@Prop()
	days: number; // Redundant

	// TODO: Enum
	@Prop({ required: true })
	approval_status: string;

	@Prop()
	reason: string;

	@Prop()
	type: string;

	@Prop()
	amount: number;
}

export type RebateDocument = Rebate & Document;
export const RebateSchema = SchemaFactory.createForClass(Rebate);
