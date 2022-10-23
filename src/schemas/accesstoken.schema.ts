import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

@Schema()
export class AccessToken {
	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	})
	user_id: User;

	@Prop({ required: true, unique: true })
	token: string;

	@Prop({ required: true })
	created_time: Date;

	@Prop({ required: true })
	isActive: boolean;

	@Prop()
	scope: string;
}

export type AccessTokenDocument = AccessToken & Document;
export const AccessTokenSchema = SchemaFactory.createForClass(AccessToken);
