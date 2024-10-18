import { Module } from '@nestjs/common';
import { coeService } from './coe-schedule.service';
import { coeScheduleController } from './coe-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bsmeScheduleEntity } from 'src/typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([bsmeScheduleEntity])],
  controllers: [coeScheduleController],
  providers: [coeService],
  exports: [coeService, TypeOrmModule],
})
export class cteScheduleModule {}
