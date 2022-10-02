import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class RawMaterial {
	@Prop({ required: true })
	name: string;

	@Prop()
	vendors: string[];
}

export type RawMaterialDocument = RawMaterial & Document;
export const RawMaterialSchema = SchemaFactory.createForClass(RawMaterial);
