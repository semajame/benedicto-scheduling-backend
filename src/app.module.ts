import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import entities from './typeorm';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
// import { TeachersModule } from './teachers/teachers.module';
import { CalendarModule } from './calendar/calendar.module';
import { ExternalModule } from './external/external.module';

import { CcsModule } from './schedule/CCS/ccs-schedule.module';
import { itsubjectsModule } from './subjects/IT/ccs-subjects.module';

import { cteSubjectsModule } from './subjects/CTE/cte-subjects.module';
import { cteScheduleModule } from './schedule/CTE/cte-schedule.module';

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
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    // TeachersModule,
    itsubjectsModule,
    CalendarModule,
    cteSubjectsModule,
    cteScheduleModule,
    CcsModule,
    ExternalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
