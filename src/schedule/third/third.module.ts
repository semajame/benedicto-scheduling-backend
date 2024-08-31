import { Module } from '@nestjs/common';
import { ThirdService } from './third.service';
import { ThirdController } from './third.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Third } from '../third/entities/third.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { Teacher } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Third, TeacherSchedule, Teacher])],
  controllers: [ThirdController],
  providers: [ThirdService],
  exports: [ThirdService, TypeOrmModule],
})
export class ThirdModule {}
