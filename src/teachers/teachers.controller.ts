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

import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get('all-teachers')
  async findAll(@Res() res: Response) {
    try {
      const teachers = await this.teacherService.findAll();
      res.json(teachers);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  @Get('all-subjects')
  async getAllSchedules(): Promise<any[]> {
    try {
      const schedules = await this.teacherService.getAllSchedules();
      return schedules.map((schedule) => ({
        id: schedule.id,
        teacherId: schedule.teacherId,
        subject_code: schedule.subject_code,
        subject: schedule.subject,
        units: schedule.units,
        room: schedule.room,
        start: schedule.start,
        end: schedule.end,
        day: schedule.day,
        teacherName: `${schedule.teacher.firstName} ${schedule.teacher.lastName}`, // Compute teacherName
      }));
    } catch (err) {
      console.error('Error retrieving all schedules:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('subject/:id')
  async getTeacherSchedule(@Param('id') id: number): Promise<any> {
    try {
      const schedule = await this.teacherService.getTeacherScheduleById(id);
      return {
        id: schedule.id,
        teacherId: schedule.teacherId,
        subject_code: schedule.subject_code,
        subject: schedule.subject,
        units: schedule.units,
        room: schedule.room,
        start: schedule.start,
        end: schedule.end,
        day: schedule.day,
        teacherName: `${schedule.teacher.firstName} ${schedule.teacher.lastName}`, // Compute teacherName
      };
    } catch (err) {
      console.error('Error retrieving teacher schedule:', err);
      throw new HttpException(err.message, HttpStatus.NOT_FOUND);
    }
  }

  @Post('add-teacher')
  // @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Body() createTeacherDto: CreateTeacherDto,

    @Res() res: Response,
  ) {
    try {
      const newTeacher = await this.teacherService.create(createTeacherDto);
      res.status(HttpStatus.CREATED).json(newTeacher);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  @Put('edit-teacher/:id')
  async update(
    @Param('id') id: number,
    @Body() updateTeacherDto: UpdateTeacherDto,
    @Res() res: Response,
  ) {
    try {
      const updatedTeacher = await this.teacherService.update(
        id,
        updateTeacherDto,
      );
      res.status(HttpStatus.OK).json(updatedTeacher);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  @Delete('delete-teacher/:id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    try {
      await this.teacherService.remove(id);
      res
        .status(HttpStatus.OK)
        .json({ message: 'Teacher deleted successfully' });
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }
}
