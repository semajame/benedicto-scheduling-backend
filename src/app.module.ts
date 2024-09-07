import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import entities from './typeorm';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TeachersModule } from './teachers/teachers.module';
import { FirstModule } from './schedule/first/first.module';
import { SecondModule } from './schedule/second/second.module';
import { ThirdModule } from './schedule/third/third.module';
import { FourthModule } from './schedule/fourth/fourth.module';
import { AllModule } from './schedule/all/all.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      //entities: ['dist/**/*.entity.js'],
      entities,
      synchronize: false,
    }),
    UsersModule,
    AuthModule,
    TeachersModule,
    FirstModule,
    SecondModule,
    ThirdModule,
    FourthModule,
    AllModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
