import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { FoodItem } from './fooditem.schema';

@Schema()
export class Meal {
  @Prop()
  mess: string;

  @Prop({ default: 'Meal' })
  name: string;

  @Prop({ required: true })
  start_time: Date;

  @Prop({ required: true })
  end_time: Date;

  @Prop()
  capacity: number;

  @Prop()
  price: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodItem',
  })
  fooditem_ids: FoodItem[];
}

export type MealDocument = Meal & Document;
export const MealSchema = SchemaFactory.createForClass(Meal);
