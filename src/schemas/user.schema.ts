import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Mess } from './mess.schema';

@Schema()
export class User {
	@Prop({ required: true })
	kerberos: string;

	@Prop({ required: true })
	name: string;

	@Prop()
	photo: string;

	@Prop({ required: true })
	hostel: string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: Mess.name })
	mess_id: Mess;

	@Prop({ required: true })
	isActive: boolean;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
