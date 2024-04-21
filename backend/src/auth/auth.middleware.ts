import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../user/user.service';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { 'x-api-key': apiKey } = req.headers;

    if (!apiKey) {
      throw new UnauthorizedException('API key not found');
    }

    try {
      const user = await this.usersService.findByApiKey(apiKey as string);
      console.log(`user ${user}`);

      if (!user) {
        throw new UnauthorizedException('Unauthorized user ooo');
      }

      next();
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
