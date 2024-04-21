import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { UserDetails } from './utils/types';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{
    token: string;
    name: string;
    id: string;
    email: string;
    apiKey: string;
  }> {
    const { name, email, password } = signUpDto;

    const apiKey = uuidv4();

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
      apiKey,
    });

    const token = this.jwtService.sign({ id: user._id.toString() });
    console.log(user);

    return {
      token,
      name: user.name,
      id: user._id.toString(),
      email: user.email,
      apiKey: user.apiKey,
    };
  }

  async login(loginDto: LoginDto): Promise<{
    token: string;
    name: string;
    id: string;
    email: string;
    apiKey: string;
  }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id.toString() });

    return {
      token,
      name: user.name,
      id: user._id.toString(),
      email: user.email,
      apiKey: user.apiKey,
    };
  }
  private jwtBlacklist: string[] = [];
  async logout(token: string): Promise<{ message: string }> {
    // Add the token to the blacklist
    this.jwtBlacklist.push(token);

    return { message: 'Logged out successfully' };
  }

  async validateUser(details: UserDetails) {
    console.log('AuthService');
    console.log(details);
    const user = await this.userModel.findOne({ email: details.email });
    console.log(user);
    if (user) return user;
    console.log('User not found. Creating...');
    const newUser = this.userModel.create(details);
    console.log(newUser);
    return newUser;
  }

  async validateUserByApiKey(apiKey: string): Promise<User> {
    const user = await this.userModel.findOne({ apiKey });
    console.log(`user val ${user}`);
    return user;
  }

  async findUser(id: number) {
    const user = await this.userModel.findById({ id });
    return user;
  }
}
