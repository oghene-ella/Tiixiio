import { Module, Logger } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  providers: [CacheService, Logger],
  exports: [CacheService],
})
export class CacheModule {}
