import { Module } from '@nestjs/common';
import { FirstService } from './first.service';
import { FirstController } from './first.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { First } from '../first/entities/first.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { Teacher } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([First, TeacherSchedule, Teacher])],
  controllers: [FirstController],
  providers: [FirstService],
  exports: [FirstService, TypeOrmModule],
})
export class FirstModule {}
