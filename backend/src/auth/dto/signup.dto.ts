import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { v4 as uuid4 } from 'uuid';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email address' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  readonly apiKey: string = uuid4();
}
