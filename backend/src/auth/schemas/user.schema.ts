// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicated Email Entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop()
  googleId?: string;

  @Prop()
  accessToken?: string;

  @Prop()
  refreshToken?: string;

  @Prop()
  apiKey: string;
}

export const userSchema = SchemaFactory.createForClass(User);
