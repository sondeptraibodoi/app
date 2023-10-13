/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async findOne(username: string): Promise<any | undefined> {
    return this.userRepository.findOne({ where: { username: username } });
  }
}
