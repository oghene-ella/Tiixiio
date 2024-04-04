import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LGA } from './schemas/lga.schema';

@Injectable()
export class LgasService {
  constructor(
    @InjectModel(LGA.name)
    private lgasModel: Model<LGA>,
  ) {}

  async findAll(): Promise<LGA[]> {
    return this.lgasModel.find();
  }

  async create(lga: LGA): Promise<LGA> {
    return this.lgasModel.create(lga);
  }

  async findById(id: string): Promise<LGA> {
    const lga = await this.lgasModel.findById(id);

    if (!lga) {
      throw new NotFoundException('LGA not found');
    }

    return lga;
  }

  async updateById(id: string, lga: LGA): Promise<LGA> {
    return this.lgasModel.findByIdAndUpdate(id, lga, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<LGA> {
    return this.lgasModel.findByIdAndDelete(id);
  }
}
