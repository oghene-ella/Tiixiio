// import { Injectable } from '@nestjs/common';
// import { PassportSerializer } from '@nestjs/passport';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User } from '../schemas/user.schema';

// @Injectable()
// export class SessionSerializer extends PassportSerializer {
//   constructor(
//     @InjectModel(User.name)
//     private readonly userModel: Model<User>,
//   ) {
//     super()
//   }
//   serializeUser(user: any, done: (err: Error, user: any) => void): any {
//     done(null, user._id.toString());
//     console.log(user._id)
//   }
//   deserializeUser(
//     userId: any,
//     done: (err: Error, payload: string) => void,
//   ): any {
//     this.userModel.findById(userId, (err: any, user: any) => {
//       done(err, user);
//     });
//   }
// }

/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from '../schemas/user.schema';
import { AuthService } from '../auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log('Serializer User');
    done(null, user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.authService.findUser(payload.id);
    console.log('Deserialize User');
    console.log(user);
    return user ? done(null, user) : done(null, null);
  }
}
