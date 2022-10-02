import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { RawMaterial } from './rawmaterial.schema';

@Schema()
export class FoodItem {
	@Prop({ required: true })
	name: string;

	@Prop({
		type: mongoose.Schema.Types.ObjectId,
		ref: 'RawMaterial',
	})
	rawmaterial_ids: RawMaterial[];
}

export type FoodItemDocument = FoodItem & Document;
export const FoodItemSchema = SchemaFactory.createForClass(FoodItem);
