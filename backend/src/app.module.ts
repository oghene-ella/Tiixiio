import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { UserModule } from './user/user.module';
import { RegionsModule } from './regions/regions.module';
import { StatesModule } from './states/states.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // add the env file
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // connect the mongo url using mongoose module
    MongooseModule.forRoot(process.env.DB_URL),
    //UserModule,
    RegionsModule,
    StatesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}