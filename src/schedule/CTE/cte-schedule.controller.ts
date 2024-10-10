import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

import { cteService } from './cte-schedule.service';
import { CreateFirstDto } from './BSED/dto/create-first.dto';
import { UpdateFirstDto } from './BSED/dto/update-first.dto';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { First } from 'src/typeorm';

@Controller('schedule')
export class cteScheduleController {
  constructor(private readonly CteService: cteService) {}

  @Get('bachelor-of-secondary-education')
  async findAll() {
    try {
      const schedules = await this.CteService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('bachelor-of-secondary-education/1st-year')
  async findFirstYear() {
    try {
      const schedules = await this.CteService.findFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('bachelor-of-secondary-education/2nd-year')
  async findSecondYear() {
    try {
      const schedules = await this.CteService.findSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('bachelor-of-secondary-education/3rd-year')
  async findThirdYear() {
    try {
      const schedules = await this.CteService.findThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('bachelor-of-secondary-education/4th-year')
  async findFourthYear() {
    try {
      const schedules = await this.CteService.findFourthYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('bachelor-of-secondary-education')
  async create(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CteService.create(createFirstDto);
    // await this.CteService.transferSchedules();

    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Put('bachelor-of-secondary-education/:id')
  async update(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CteService.update(id, updateFirstDto);
  }

  @Delete('bachelor-of-secondary-education/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.CteService.delete(id);
  }

  @Get('teacher/:teacher')
  async getTeacherSchedulesByTeacherName(
    @Param('teacher') teacher: string,
  ): Promise<TeacherSchedule[]> {
    return await this.CteService.getTeacherSchedulesByTeacherName(teacher);
  }
}
