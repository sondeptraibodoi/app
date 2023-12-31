/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: 'sadsadsadsadsafsafxvcdkfjkdsnfjdsgfjhbndsjkbfgsjdbgsdb',
      signOptions: { expiresIn: '90000' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
