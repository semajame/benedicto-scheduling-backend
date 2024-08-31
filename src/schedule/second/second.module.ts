import { Module } from '@nestjs/common';
import { SecondService } from './second.service';
import { SecondController } from './second.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Second } from '../second/entities/second.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Second, TeacherSchedule, Teacher])],
  controllers: [SecondController],
  providers: [SecondService],
  exports: [SecondService, TypeOrmModule],
})
export class SecondModule {}
