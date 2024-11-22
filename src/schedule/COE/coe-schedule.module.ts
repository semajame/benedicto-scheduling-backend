import { Module } from '@nestjs/common';
import { coeService } from './coe-schedule.service';
import { coeScheduleController } from './coe-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bsmeScheduleEntity, CcsScheduleEntitiy } from 'src/typeorm';
import { bsieScheduleEntity } from 'src/typeorm';
import { bseeScheduleEntity } from 'src/typeorm';
import { bsceScheduleEntity } from 'src/typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';
import { cteService } from '../CTE/cte-schedule.service';
import { bsedScheduleEntity } from 'src/typeorm';
import { minorScheduleEntity } from '../CTE/BSED/entities/bsed-schedule.entity';
import { beedScheduleEntity } from 'src/typeorm';
import { CcsService } from '../CCS/ccs-schedule.service';
import { ExternalService } from 'src/external/external.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      bsmeScheduleEntity,
      bsieScheduleEntity,
      bseeScheduleEntity,
      bsceScheduleEntity,
      bsedScheduleEntity,
      beedScheduleEntity,
      TeacherSchedule,
      minorScheduleEntity,
      CcsScheduleEntitiy,
    ]),
  ],
  controllers: [coeScheduleController],
  providers: [coeService, cteService, CcsService, ExternalService],
  exports: [coeService, TypeOrmModule],
})
export class coeScheduleModule {}
