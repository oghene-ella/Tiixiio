import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LgasService } from './lgas.service';
import { LGA } from './schemas/lga.schema';

@Controller('lgas')
export class LgasController {
  constructor(private lgasService: LgasService) {}

  @Get()
  async getAllLGAs(): Promise<LGA[]> {
    return this.lgasService.findAll();
  }

  @Post()
  async createLGA(@Body() lga: LGA): Promise<LGA> {
    return this.lgasService.create(lga);
  }

  @Get(':id')
  async getLGA(@Param('id') id: string): Promise<LGA> {
    return this.lgasService.findById(id);
  }

  @Put(':id')
  async updateLGA(@Param('id') id: string, @Body() lga: LGA): Promise<LGA> {
    return this.lgasService.updateById(id, lga);
  }

  @Delete(':id')
  async deleteLGA(@Param('id') id: string): Promise<LGA> {
    return this.lgasService.deleteById(id);
  }
}
