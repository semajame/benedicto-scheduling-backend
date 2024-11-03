import { Module } from '@nestjs/common';
import { TeacherService } from './teachers.service';
import { TeacherController } from './teachers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { TeacherSchedule } from './entities/teacher_subjects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherSchedule]), HttpModule],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeachersModule {}
