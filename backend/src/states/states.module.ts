import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StatesSchema } from './schemas/state.schemas';
import { ApiKeyMiddleware } from 'src/auth/auth.middleware';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'States', schema: StatesSchema }]),
    UserModule,
  ],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes(
        { path: 'states', method: RequestMethod.POST },
        { path: 'states/:id', method: RequestMethod.GET },
        { path: 'states/:id', method: RequestMethod.PUT },
        { path: 'states/:id', method: RequestMethod.DELETE },
      );
  }
}
