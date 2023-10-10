/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/users/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable({})
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = ({ sub: user.userId, username: user.username } = user);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  signup() {
    return { mssg: 'sign up' };
  }

  signin() {
    return 'sign in';
  }
}
