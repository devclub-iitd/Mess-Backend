import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Mess {
	@Prop({ required: true, unique: true })
	name: string;

	@Prop()
	capacity: number;
}

export type MessDocument = Mess & Document;
export const MessSchema = SchemaFactory.createForClass(Mess);
