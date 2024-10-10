import { Module } from '@nestjs/common';
import { cteService } from './cte-schedule.service';
import { cteScheduleController } from './cte-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bsedScheduleEntity } from './BSED/entities/bsed-schedule.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([bsedScheduleEntity, TeacherSchedule])],
  controllers: [cteScheduleController],
  providers: [cteService],
  exports: [cteService, TypeOrmModule],
})
export class cteScheduleModule {}
