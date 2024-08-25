import { Module } from '@nestjs/common';
import { TeacherService } from './teachers.service';
import { TeacherController } from './teachers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherSchedule } from './entities/teacher_subjects.entity';

import { Teacher } from './entities/teacher.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TeacherSchedule, Teacher])],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeachersModule {}
