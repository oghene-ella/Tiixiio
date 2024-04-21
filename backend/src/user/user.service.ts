import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../auth/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getDashboardDetails(_id: string) {
    // Fetch the user details from the database
    const user = await this.userModel.findById(_id).select('-password');
    console.log(user);
    return user;
  }

  async findByApiKey(apiKey: string) {
    const apiKeyUser = this.userModel.findOne({ apiKey }).exec();
    return apiKeyUser;
  }
}
