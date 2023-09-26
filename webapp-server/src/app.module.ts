import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
        synchronize: process.get('DATABASE_SYNC'),
        database: process.get('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
