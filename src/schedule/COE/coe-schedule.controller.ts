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

import { coeService } from './coe-schedule.service';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { First } from 'src/typeorm';

@Controller('schedule')
export class coeScheduleController {
  constructor(private readonly CoeService: coeService) {}

  @Get('mechanical-engineering')
  async findAll() {
    try {
      const schedules = await this.CoeService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('mechanical-engineering/1st-year')
  async findFirstYear() {
    try {
      const schedules = await this.CoeService.findFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('mechanical-engineering/2nd-year')
  async findSecondYear() {
    try {
      const schedules = await this.CoeService.findSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('mechanical-engineering/3rd-year')
  async findThirdYear() {
    try {
      const schedules = await this.CoeService.findThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('mechanical-engineering/4th-year')
  async findFourthYear() {
    try {
      const schedules = await this.CoeService.findFourthYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('mechanical-engineering')
  async create(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CoeService.create(createFirstDto);
    // await this.CoeService.transferSchedules();

    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Put('mechanical-engineering/:id')
  async update(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CoeService.update(id, updateFirstDto);
  }

  @Delete('mechanical-engineering/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.CoeService.delete(id);
  }

  @Get('teacher/:teacher')
  async getTeacherSchedulesByTeacherName(
    @Param('teacher') teacher: string,
  ): Promise<TeacherSchedule[]> {
    return await this.CoeService.getTeacherSchedulesByTeacherName(teacher);
  }
}
