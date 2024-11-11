import { Module } from '@nestjs/common';
import { cbmService } from './cbm-schedule.service';
import { cbmScheduleController } from './cbm-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bsaScheduleEntity } from './entities/bsa-schedule.entity';
import { bshmScheduleEntity } from './entities/bshm-schedule.entity';
import { bsmmScheduleEntity } from './entities/bsmm-schedule.entity';
import { bshrmScheduleEntity } from './entities/bshrm-schedule.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';
import { cteService } from '../CTE/cte-schedule.service';
import { bsedScheduleEntity } from 'src/typeorm';
import { beedScheduleEntity } from 'src/typeorm';
import { minorScheduleEntity } from '../CTE/BSED/entities/bsed-schedule.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      bsaScheduleEntity,
      bshmScheduleEntity,
      bsmmScheduleEntity,
      bshrmScheduleEntity,
      bsedScheduleEntity,
      beedScheduleEntity,
      TeacherSchedule,
      minorScheduleEntity,
    ]),
  ],
  controllers: [cbmScheduleController],
  providers: [cbmService, cteService],
  exports: [cbmService, TypeOrmModule],
})
export class cbmScheduleModule {}
