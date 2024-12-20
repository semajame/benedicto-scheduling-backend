import { Module } from '@nestjs/common';
import { CcsService } from './ccs-schedule.service';
import { CcsController } from './ccs-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CcsScheduleEntitiy } from 'src/typeorm';
import { bsedScheduleEntity } from 'src/typeorm';
import { beedScheduleEntity } from 'src/typeorm';
import { cteService } from '../CTE/cte-schedule.service';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { minorScheduleEntity } from '../CTE/BSED/entities/bsed-schedule.entity';
import { ExternalService } from 'src/external/external.service';
import { HttpModule } from '@nestjs/axios';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      CcsScheduleEntitiy,
      TeacherSchedule,
      bsedScheduleEntity,
      beedScheduleEntity,
      minorScheduleEntity,
    ]),
  ],
  controllers: [CcsController],
  providers: [CcsService, cteService, ExternalService],
  exports: [CcsService, TypeOrmModule],
})
export class CcsModule {}
