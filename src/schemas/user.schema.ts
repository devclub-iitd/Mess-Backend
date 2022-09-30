import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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

  @Prop({required: true})
  isActive: boolean;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
