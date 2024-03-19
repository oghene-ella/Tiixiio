import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
//import { JwtStrategy } from './jwt.strategy';
import { userSchema } from './schemas/user.schema';
import { ConfigService } from '@nestjs/config';
import { GoogleStrategy } from './utils/google.strategy';
import { GoogleService } from './utils/google.service';
import { SessionSerializer } from './utils/session.serialize';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    PassportModule.register({ session: true }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, GoogleService, SessionSerializer, {
    provide: 'AUTH_SERVICE',
    useClass: AuthService,
  },],
  exports: [AuthService],
})
export class AuthModule { }
