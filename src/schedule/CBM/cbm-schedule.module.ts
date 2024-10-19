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

@Module({
  imports: [
    TypeOrmModule.forFeature([
      bsaScheduleEntity,
      bshmScheduleEntity,
      bsmmScheduleEntity,
      bshrmScheduleEntity,
      TeacherSchedule,
    ]),
  ],
  controllers: [cbmScheduleController],
  providers: [cbmService],
  exports: [cbmService, TypeOrmModule],
})
export class cbmScheduleModule {}
