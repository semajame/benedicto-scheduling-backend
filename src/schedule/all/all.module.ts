import { Module } from '@nestjs/common';
import { AllService } from './all.service';
import { AllController } from './all.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { All } from '../all/entities/all.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { Teacher } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([All, TeacherSchedule, Teacher])],
  controllers: [AllController],
  providers: [AllService],
  exports: [AllService, TypeOrmModule],
})
export class AllModule {}
