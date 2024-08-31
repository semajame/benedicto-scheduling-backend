import { Module } from '@nestjs/common';
import { FourthService } from './fourth.service';
import { FourthController } from './fourth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fourth } from '../fourth/entities/fourth.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fourth, TeacherSchedule, Teacher])],
  controllers: [FourthController],
  providers: [FourthService],
  exports: [FourthService, TypeOrmModule],
})
export class FourthModule {}
