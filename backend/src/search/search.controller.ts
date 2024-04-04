import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async search(@Query('query') query: string) {
    try {
      const result = await this.searchService.search(query);
      return result;
    } catch (error) {
      console.error(error);
      return { error: 'An error occurred during search' };
    }
  }
}
