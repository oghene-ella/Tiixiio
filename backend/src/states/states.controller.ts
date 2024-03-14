import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StatesService } from './states.service';
import { States } from './schemas/state.schemas';

@Controller('states')
export class StatesController {
  constructor(private statesService: StatesService) {}

  @Get()
  async getAllStates(): Promise<States[]> {
    return this.statesService.findAll();
  }

  @Post()
  async createStates(
    @Body()
    state,
  ): Promise<States> {
    return this.statesService.create(state);
  }

  @Get(':id')
  async getState(
    @Param('id')
    id: string,
  ): Promise<States> {
    return this.statesService.findById(id);
  }

  @Put(':id')
  async updateState(
    @Param('id')
    id: string,
    @Body()
    state,
  ): Promise<States> {
    return this.statesService.updateById(id, state);
  }

  @Delete(':id')
  async deleteState(
    @Param('id')
    id: string,
  ): Promise<States> {
    return this.statesService.deleteById(id);
  }
}
