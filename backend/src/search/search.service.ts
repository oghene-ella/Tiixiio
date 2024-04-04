import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Region, State, LGA } from './models';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel('Region') private readonly regionModel: Model<Region>,
    @InjectModel('State') private readonly stateModel: Model<State>,
    @InjectModel('LGA') private readonly lgaModel: Model<LGA>,
  ) {}

  async search(
    query: string,
  ): Promise<{ regions: Region[]; states: State[]; lgas: LGA[] }> {
    const filteredRegions = await this.regionModel
      .find({ name: { $regex: new RegExp(query, 'i') } })
      .exec();
    const filteredStates = await this.stateModel
      .find({ name: { $regex: new RegExp(query, 'i') } })
      .exec();
    const filteredLGAs = await this.lgaModel
      .find({ name: { $regex: new RegExp(query, 'i') } })
      .exec();

    return {
      regions: filteredRegions,
      states: filteredStates,
      lgas: filteredLGAs,
    };
  }
}
