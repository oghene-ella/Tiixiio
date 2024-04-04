import { Module } from '@nestjs/common';
import { LgasController } from './lgas.controller';
import { LgasService } from './lgas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LGASchema } from './schemas/lga.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'LGA', schema: LGASchema }])],
  controllers: [LgasController],
  providers: [LgasService],
})
export class LgasModule {}
