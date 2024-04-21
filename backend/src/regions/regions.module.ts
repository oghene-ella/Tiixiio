import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegionsSchema } from './schema/regions.schema';
import { ApiKeyMiddleware } from 'src/auth/auth.middleware';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Regions', schema: RegionsSchema }]),
    UserModule,
  ],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes(
        { path: 'regions', method: RequestMethod.POST },
        { path: 'regions/:id', method: RequestMethod.GET },
        { path: 'regions/:id', method: RequestMethod.PUT },
        { path: 'regions/:id', method: RequestMethod.DELETE },
      );
  }
}
