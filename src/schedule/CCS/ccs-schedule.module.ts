import { Module } from '@nestjs/common';
import { CcsService } from './ccs-schedule.service';
import { CcsController } from './ccs-schedule.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CcsScheduleEntitiy } from 'src/typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CcsScheduleEntitiy, TeacherSchedule, Teacher]),
  ],
  controllers: [CcsController],
  providers: [CcsService],
  exports: [CcsService, TypeOrmModule],
})
export class CcsModule {}
