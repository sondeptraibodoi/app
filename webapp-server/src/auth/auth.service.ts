/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {}

  signup() {
    return { mssg: 'sign up' };
  }

  signin() {
    return 'sign in';
  }
}
