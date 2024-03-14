import { Module } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionsSchema } from './schema/regions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Regions', schema: RegionsSchema }]),
  ],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
