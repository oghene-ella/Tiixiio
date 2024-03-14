import { Module } from '@nestjs/common';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StatesSchema } from './schemas/state.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'States', schema: StatesSchema }]),
  ],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}
