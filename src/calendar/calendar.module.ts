import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEntity } from '../calendar/entities/calendar.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { User } from 'src/users/models/entities/user.entity';
// import { Teacher } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CalendarEntity, TeacherSchedule, User])],
  controllers: [CalendarController],
  providers: [CalendarService],
  exports: [CalendarService, TypeOrmModule],
})
export class CalendarModule {}
