import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Regions } from './schema/regions.schema';
import * as mongoose from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class RegionsService {
  constructor(
    @InjectModel(Regions.name)
    private regionsModel: mongoose.Model<Regions>,
  ) {}

  async findAll(): Promise<Regions[]> {
    const regions = await this.regionsModel.find();
    return regions;
  }

  async create(regions: Regions): Promise<Regions> {
    const res = await this.regionsModel.create(regions);
    return res;
  }

  async findById(id: string): Promise<Regions> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid region ID');
    }

    const region = await this.regionsModel.findById(id);

    if (!region) {
      throw new NotFoundException('Region not found');
    }

    return region;
  }

  async updateById(id: string, regions: Regions): Promise<Regions> {
    return await this.regionsModel.findByIdAndUpdate(id, regions, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Regions> {
    return await this.regionsModel.findByIdAndDelete(id);
  }
}
