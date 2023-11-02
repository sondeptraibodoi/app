/* eslint-disable prettier/prettier */
import {
  Controller,
  Body,
  ValidationPipe,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userservice.store(createUserDto);
  }

  @Get()
  findAll() {
    return this.userservice.index();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userservice.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userservice.update(id, updateUserDto);
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.userservice.destroy(id);
  }
}
