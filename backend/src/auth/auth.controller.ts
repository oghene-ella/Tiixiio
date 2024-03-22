import {
  Body,
  Controller,
  Post,
  Get,
  ValidationPipe,
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './utils/guards';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) signUpDto: SignUpDto,
  ): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body(ValidationPipe) loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('check-auth')
  checkAuth(@Req() req) {
    if (req.user) {
      return { isAuthenticated: true, user: req.user };
    } else {
      return { isAuthenticated: false };
    }
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Authentication' };
  }

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'Google Redirected' };
  }

  @Get('/logout')
  async logout(@Req() req: Request, @Res() res: Response): Promise<void> {
    res.cookie('jwt', '', { maxAge: 0 });

    res.status(HttpStatus.OK).json({ message: 'Logged out successfully' });
  }
}
