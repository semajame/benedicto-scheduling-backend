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
import { cteService } from '../CTE/cte-schedule.service';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { First } from 'src/typeorm';

@Controller('schedule')
export class cbmScheduleController {
  constructor(
    private readonly CbmService: cbmService,
    private readonly CteService: cteService,
  ) {}

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

  @Get('accounting/minor-subjects')
  async findMinorSubjectsBsa() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsa();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('accounting/minor-subjects/1st-year')
  async findMinorSubjectsBsaFirstYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsaFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('accounting/minor-subjects/2nd-year')
  async findMinorSubjectsBsaSecondYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsaSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('accounting/minor-subjects/3rd-year')
  async findMinorSubjectsBsaThirdYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsaThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('accounting/minor-subjects/4th-year')
  async findMinorSubjectsBsaFourthYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsaFourthYear();
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

  @Get('hospitality-management/minor-subjects')
  async findMinorSubjectsBshm() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBshm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management/minor-subjects/1st-year')
  async findMinorSubjectsBshmFirstYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBshmFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management/minor-subjects/2nd-year')
  async findMinorSubjectsBshmSecondYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBshmSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management/minor-subjects/3rd-year')
  async findMinorSubjectsBshmThirdYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBshmThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('hospitality-management/minor-subjects/4th-year')
  async findMinorSubjectsBshmFourthYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBshmFourthYear();
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

  @Get('human-resource-management/minor-subjects')
  async findMinorSubjectsBshrm() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBshrm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management/minor-subjects/1st-year')
  async findMinorSubjectsBshrmFirstYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBshrmFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management/minor-subjects/2nd-year')
  async findMinorSubjectsBshrmSecondYear() {
    try {
      const schedules =
        await this.CteService.findMinorSubjectsBshrmSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management/minor-subjects/3rd-year')
  async findMinorSubjectsBshrmThirdYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBshrmThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('human-resource-management/minor-subjects/4th-year')
  async findMinorSubjectsBshrmFourthYear() {
    try {
      const schedules =
        await this.CteService.findMinorSubjectsBshrmFourthYear();
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

  @Get('marketing-management/minor-subjects')
  async findMinorSubjectsBsmm() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsmm();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management/minor-subjects/1st-year')
  async findMinorSubjectsBsmmFirstYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsmmFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management/minor-subjects/2nd-year')
  async findMinorSubjectsBsmmSecondYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsmmSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management/minor-subjects/3rd-year')
  async findMinorSubjectsBsmmThirdYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsmmThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('marketing-management/minor-subjects/4th-year')
  async findMinorSubjectsBsmmFourthYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsmmFourthYear();
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
