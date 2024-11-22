import { Module } from '@nestjs/common';
import { cteService } from './cte-schedule.service';
import { cteScheduleController } from './cte-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  bsedScheduleEntity,
  minorScheduleEntity,
} from './BSED/entities/bsed-schedule.entity';
import { beedScheduleEntity } from './BSELEM/entities/beed-schedule.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { ExternalService } from 'src/external/external.service';
import { HttpModule } from '@nestjs/axios';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      bsedScheduleEntity,
      TeacherSchedule,
      beedScheduleEntity,
      minorScheduleEntity,
    ]),
  ],
  controllers: [cteScheduleController],
  providers: [cteService, ExternalService],
  exports: [cteService, TypeOrmModule],
})
export class cteScheduleModule {}
