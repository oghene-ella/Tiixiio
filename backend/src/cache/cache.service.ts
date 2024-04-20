import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CacheService {
  private readonly logger = new Logger(CacheService.name);
  cacheManager: any;

  async get(key: string): Promise<any> {
    const cachedData = await this.cacheManager.get(key);
    if (cachedData) {
      this.logger.log(`Cache hit for key: ${key}`);
    } else {
      this.logger.log(`Cache miss for key: ${key}`);
    }
    return cachedData;
  }
}
