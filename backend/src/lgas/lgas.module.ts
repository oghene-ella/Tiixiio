import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { LgasController } from './lgas.controller';
import { LgasService } from './lgas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LGASchema } from './schemas/lga.schema';
import { UserModule } from 'src/user/user.module';
import { ApiKeyMiddleware } from 'src/auth/auth.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'LGA', schema: LGASchema }]),
    UserModule,
  ],
  controllers: [LgasController],
  providers: [LgasService],
})
export class LgasModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes(
        { path: 'lgas', method: RequestMethod.POST },
        { path: 'lgas/:id', method: RequestMethod.GET },
        { path: 'lgas/:id', method: RequestMethod.PUT },
        { path: 'lgas/:id', method: RequestMethod.DELETE },
      );
  }
}
