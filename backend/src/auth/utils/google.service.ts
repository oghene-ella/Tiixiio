// google.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class GoogleService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async saveUser(userDto: { name: string; email: string }): Promise<User> {
    const { name, email } = userDto;

    let user = await this.userModel.findOne({ email });

    if (!user) {
      user = await this.userModel.create({ name, email });
    }

    return user;
  }
}
