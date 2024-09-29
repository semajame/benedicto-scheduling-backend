import { Module } from '@nestjs/common';
import { cteService } from './cte-schedule.service';
import { cteScheduleController } from './cte-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bsedScheduleEntity } from '../CTE/BSED/entities/bsedSchedule.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { Teacher } from 'src/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([bsedScheduleEntity, TeacherSchedule, Teacher]),
  ],
  controllers: [cteScheduleController],
  providers: [cteService],
  exports: [cteService, TypeOrmModule],
})
export class cteScheduleModule {}
