import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { TeacherService } from './teachers.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get('all-teachers')
  async findAll(@Res() res: Response) {
    try {
      const teachers = await this.teacherService.findAll();
      return res.status(HttpStatus.OK).json(teachers);
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: err.message });
    }
  }

  @Get('all-subjects')
  async getAllSchedules() {
    try {
      const schedules = await this.teacherService.getAllSchedules();
      return schedules.map((schedule) => ({
        id: schedule.id,
        teacher_id: schedule.teacher_id,
        subject_id: schedule.subject_id,
        subject_code: schedule.subject_code,
        semester: schedule.semester,
        semester_id: schedule.semester_id,
        school_year: schedule.school_year,
        teacher: schedule.teacher,
        subject: schedule.subject,
        units: schedule.units,
        room: schedule.room,
        start: schedule.start,
        end: schedule.end,
        day: schedule.day,
        recurrencePattern: schedule.recurrencePattern,
        background: schedule.background,
      }));
    } catch (err) {
      console.error('Error retrieving all schedules:', err);
      throw new HttpException(
        { error: 'Internal Server Error', details: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('schedules/:teacher_id')
  async getTeacherSchedule(
    @Param('teacher_id') teacher_id: number,
    @Res() res: Response,
  ) {
    try {
      const schedules =
        await this.teacherService.getTeacherSchedulesByTeacherId(teacher_id);
      const formattedSchedules = schedules.map((schedule) => ({
        id: schedule.id,
        teacher_id: schedule.teacher_id,
        subject_id: schedule.subject_id,
        teacher: schedule.teacher, // Teacher name is fetched from the API
        subject_code: schedule.subject_code,
        semester: schedule.semester,
        semester_id: schedule.semester_id,
        school_year: schedule.school_year,
        subject: schedule.subject,
        units: schedule.units,
        room: schedule.room,
        start: schedule.start,
        end: schedule.end,
        day: schedule.day,
      }));
      return res.status(HttpStatus.OK).json(formattedSchedules);
    } catch (err) {
      console.error('Error retrieving teacher schedule:', err);
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ error: 'Schedule not found' });
    }
  }
}
