import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Regions extends Document {
  @Prop()
  name: string;

  @Prop({ type: [{ type: String }] })
  states: string[];

  @Prop()
  population: number;

  @Prop()
  area: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: String }] })
  languagesSpoken: string[];

  @Prop({ type: [{ type: String }] })
  majorCities: string[];

  @Prop({ type: [{ type: String }] })
  ethnicGroups: string[];
}

export const RegionsSchema = SchemaFactory.createForClass(Regions);
