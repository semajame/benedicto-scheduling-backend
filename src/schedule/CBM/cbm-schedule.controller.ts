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

import { cbmService } from './cbm-schedule.service';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { First } from 'src/typeorm';

@Controller('schedule')
export class cbmScheduleController {
  constructor(private readonly CbmService: cbmService) {}

  //^ GET
  @Get('accounting')
  async findAll() {
    try {
      const schedules = await this.CbmService.findAllBsa();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management')
  async findAllBshm() {
    try {
      const schedules = await this.CbmService.findAllBshm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management')
  async findAllBshrm() {
    try {
      const schedules = await this.CbmService.findAllBshrm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management')
  async findAllBsmm() {
    try {
      const schedules = await this.CbmService.findAllBsmm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('accounting/1st-year')
  async findFirstYearBsa() {
    try {
      const schedules = await this.CbmService.findFirstYearBsa();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('accounting/2nd-year')
  async findSecondYearBsa() {
    try {
      const schedules = await this.CbmService.findSecondYearBsa();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('accounting/3rd-year')
  async findThirdYearBsa() {
    try {
      const schedules = await this.CbmService.findThirdYearBsa();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('accounting/4th-year')
  async findFourthYearBsa() {
    try {
      const schedules = await this.CbmService.findFourthYearBsa();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management/1st-year')
  async findFirstYearBshm() {
    try {
      const schedules = await this.CbmService.findFirstYearBshm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management/2nd-year')
  async findSecondYearBshm() {
    try {
      const schedules = await this.CbmService.findSecondYearBshm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management/3rd-year')
  async findThirdYearBshm() {
    try {
      const schedules = await this.CbmService.findThirdYearBshm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management/4th-year')
  async findFourthYearBshm() {
    try {
      const schedules = await this.CbmService.findFourthYearBshm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management/1st-year')
  async findFirstYearBshrm() {
    try {
      const schedules = await this.CbmService.findFirstYearBshrm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management/2nd-year')
  async findSecondYearBshrm() {
    try {
      const schedules = await this.CbmService.findSecondYearBshrm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management/3rd-year')
  async findThirdYearBshrm() {
    try {
      const schedules = await this.CbmService.findThirdYearBshrm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management/4th-year')
  async findFourthYearBshrm() {
    try {
      const schedules = await this.CbmService.findFourthYearBshrm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management/1st-year')
  async findFirstYearBsmm() {
    try {
      const schedules = await this.CbmService.findFirstYearBsmm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management/2nd-year')
  async findSecondYearBsmm() {
    try {
      const schedules = await this.CbmService.findSecondYearBsmm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management/3rd-year')
  async findThirdYearBsmm() {
    try {
      const schedules = await this.CbmService.findThirdYearBsmm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management/4th-year')
  async findFourthYearBsmm() {
    try {
      const schedules = await this.CbmService.findFourthYearBsmm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //^ POST
  @Post('accounting')
  async create(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CbmService.create(createFirstDto);
    // await this.CbmService.transferSchedules();

    return newSchedule;
  }

  @Post('hospitality-management')
  async createBshm(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CbmService.createbshm(createFirstDto);
    // await this.CbmService.transferSchedules();

    return newSchedule;
  }

  @Post('marketing-management')
  async createBsmm(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CbmService.createbsmm(createFirstDto);
    // await this.CbmService.transferSchedules();

    return newSchedule;
  }

  @Post('human-resource-management')
  async createBshrm(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CbmService.createbshrm(createFirstDto);
    // await this.CbmService.transferSchedules();

    return newSchedule;
  }

  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  //^ PUT
  @Put('accounting/:id')
  async update(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CbmService.update(id, updateFirstDto);
  }

  @Put('hospitality-management/:id')
  async updateBshm(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CbmService.updatebshm(id, updateFirstDto);
  }

  @Put('marketing-management/:id')
  async updateBsmm(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CbmService.updatebsmm(id, updateFirstDto);
  }

  @Put('human-resource-management/:id')
  async updateBshrm(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CbmService.updatebshrm(id, updateFirstDto);
  }

  //^ DELETE
  @Delete('accounting/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.CbmService.delete(id);
  }

  @Delete('hospitality-management/:id')
  async deleteBshm(@Param('id') id: number): Promise<void> {
    await this.CbmService.deletebshm(id);
  }

  @Delete('marketing-management/:id')
  async deleteBsmm(@Param('id') id: number): Promise<void> {
    await this.CbmService.deletebsmm(id);
  }

  @Delete('human-resource-management/:id')
  async deleteBshrm(@Param('id') id: number): Promise<void> {
    await this.CbmService.deletebshrm(id);
  }

  @Get('teacher/:teacher')
  async getTeacherSchedulesByTeacherName(
    @Param('teacher') teacher: string,
  ): Promise<TeacherSchedule[]> {
    return await this.CbmService.getTeacherSchedulesByTeacherName(teacher);
  }
}
