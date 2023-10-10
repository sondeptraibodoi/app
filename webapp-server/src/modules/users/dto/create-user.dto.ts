/* eslint-disable prettier/prettier */
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  name: string;

  @IsEmail()
  email: string;

  avatar_url: string;
  username: string;
  phonenumber: string;
  password: string;
  role: string;
}
