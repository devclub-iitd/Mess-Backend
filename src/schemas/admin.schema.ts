import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Mess } from './mess.schema';
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

export const MESS_LIST = ['UDAIGIRI', 'HIMADRI', 'DRONAGIRI'];

@Schema()
export class Admin {
	@Prop({ required: true })
	kerberos: string;

	@Prop({ required: true })
	password_hash: string;

	@Prop({ required: true })
	name: string;

	@Prop()
	role: string;

	@Prop({ required: true, default: false })
	isManager: boolean;

	@Prop({
		type: [mongoose.Schema.Types.ObjectId],
		ref: Mess.name,
	})
	mess_ids: Mess[];
}

export type AdminDocument = Admin & Document;
export const AdminSchema = SchemaFactory.createForClass(Admin);
