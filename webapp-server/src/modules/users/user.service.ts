/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole, Users } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async store(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create({
      ...createUserDto,
      role: UserRole.GUEST,
      created_at: new Date().toLocaleString(),
    });
    return this.userRepository.save(newUser);
  }

  index() {
    return this.userRepository.find();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`Tài khoản này không tồn tại`);
    }
    await this.userRepository
      .createQueryBuilder()
      .update()
      .set({
        name: updateUserDto.name,
        email: updateUserDto.email,
        avatar_url: updateUserDto.avatar_url,
        phonenumber: updateUserDto.phonenumber,
        password: updateUserDto.password,
      })
      .where('id = :id', { id })
      .execute();
    return this.findOne(id);
  }

  async findOne(username: string): Promise<any | undefined> {
    return this.userRepository.findOne({ where: { username: username } });
  }

  async destroy(id: string) {
    await this.userRepository.delete(id);
  }
}
