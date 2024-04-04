import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionsModule } from '../regions/regions.module';
import { StatesModule } from '../states/states.module';
import { LgasModule } from '../lgas/lgas.module';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { RegionsSchema } from '../regions/schema/regions.schema';
import { StatesSchema } from '../states/schemas/state.schemas';
import { LGASchema } from '../lgas/schemas/lga.schema';

@Module({
  imports: [
    RegionsModule,
    StatesModule,
    LgasModule,
    MongooseModule.forFeature([
      { name: 'Region', schema: RegionsSchema },
      { name: 'State', schema: StatesSchema },
      { name: 'LGA', schema: LGASchema },
    ]),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
