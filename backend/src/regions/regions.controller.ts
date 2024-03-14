import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { Regions } from './schema/regions.schema';

@Controller('regions')
export class RegionsController {
  constructor(private regionsService: RegionsService) {}

  @Get()
  async getAllRegions(): Promise<Regions[]> {
    return this.regionsService.findAll();
  }

  @Post()
  async createRegions(
    @Body()
    regions,
  ): Promise<Regions> {
    return this.regionsService.create(regions);
  }

  @Get(':id')
  async getRegion(
    @Param('id')
    id: string,
  ): Promise<Regions> {
    return this.regionsService.findById(id);
  }

  @Put(':id')
  async updateRegions(
    @Param('id')
    id: string,
    @Body()
    regions,
  ): Promise<Regions> {
    return this.regionsService.updateById(id, regions);
  }

  @Delete(':id')
  async deleteRegion(
    @Param('id')
    id: string,
  ): Promise<Regions> {
    return this.regionsService.deleteById(id);
  }
}
