import { Module } from '@nestjs/common';
import { TeacherService } from './teachers.service';
import { TeacherController } from './teachers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TeacherSchedule } from './entities/teacher_subjects.entity';
import { Teacher } from './entities/teacher.entity';
import { First } from '../schedule/first/entities/first.entity';
import { Second } from '../schedule/second/entities/second.entity';
import { Third } from '../schedule/third/entities/third.entity';
import { Fourth } from '../schedule/fourth/entities/fourth.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TeacherSchedule,
      Teacher,
      First,
      Second,
      Third,
      Fourth,
    ]),
  ],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeachersModule {}
