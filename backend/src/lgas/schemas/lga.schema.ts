import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class LGA extends Document {
  @Prop()
  name: string;

  @Prop({ unique: true })
  code: string;

  @Prop({ type: String, ref: 'Regions' })
  regionId: string;

  @Prop()
  population: number;

  @Prop()
  area: string;
}

export const LGASchema = SchemaFactory.createForClass(LGA);

LGASchema.virtual('region', {
  ref: 'Regions',
  localField: 'regionId',
  foreignField: '_id',
  justOne: true,
});

LGASchema.pre('findOne', function () {
  this.populate('region', 'name');
});
