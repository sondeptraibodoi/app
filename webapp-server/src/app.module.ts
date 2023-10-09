/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env'] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (process: ConfigService) => ({
        type: 'postgres',
        host: process.get('DATABASE_HOST'),
        port: process.get('DATABASE_PORT'),
        username: process.get('DATABASE_USERNAME'),
        password: process.get('DATABASE_PASSWORD'),
        synchronize: false,
        logging: true,
        database: process.get('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
    }),
    AuthModule,
    UserModule,
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
