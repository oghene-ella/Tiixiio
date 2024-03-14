import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { States } from './schemas/state.schemas';

@Injectable()
export class StatesService {
  constructor(
    @InjectModel(States.name)
    private statesModel: Model<States>,
  ) {}

  async findAll(): Promise<States[]> {
    const states = await this.statesModel.find();
    return states;
  }

  async create(states: States): Promise<States> {
    const res = await this.statesModel.create(states);
    return res;
  }

  async findById(id: string): Promise<States> {
    const region = await this.statesModel.findById(id).exec();

    if (!region) {
      throw new NotFoundException('Region not found');
    }

    return region;
  }

  async updateById(id: string, states: States): Promise<States> {
    return await this.statesModel.findByIdAndUpdate(id, states, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<States> {
    return await this.statesModel.findByIdAndDelete(id);
  }
}
