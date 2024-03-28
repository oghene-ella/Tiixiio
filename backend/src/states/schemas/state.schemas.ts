import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class States extends Document {
  @Prop()
  name: string;

  @Prop({ type: String, ref: 'Regions' })
  regionId: string;

  @Prop({ type: String })
  regionName: string;

  @Prop({ type: [{ type: String }] })
  localGovAreas: string[];

  @Prop()
  capital: string;

  @Prop()
  population: number;

  @Prop()
  url: string;

  @Prop()
  img: string;

  @Prop()
  area: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: String }] })
  majorCities: string[];

  @Prop({ type: [{ type: String }] })
  ethnicGroups: string[];

  @Prop({ type: [{ type: String }] })
  touristsAttractions: string[];

  @Prop({ type: [{ type: String }] })
  languagesSpoken: string[];
}

export const StatesSchema = SchemaFactory.createForClass(States);

StatesSchema.virtual('region', {
  ref: 'Regions',
  localField: 'regionId',
  foreignField: '_id',
  justOne: true,
});

StatesSchema.pre('findOne', function () {
  this.populate('region', 'name');
});
