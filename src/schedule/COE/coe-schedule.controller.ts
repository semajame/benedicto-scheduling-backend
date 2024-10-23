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
import { cteService } from '../CTE/cte-schedule.service';
import { CcsService } from '../CCS/ccs-schedule.service';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { First } from 'src/typeorm';

@Controller('schedule')
export class coeScheduleController {
  constructor(
    private readonly CoeService: coeService,
    private readonly CteService: cteService,
    private readonly ccsService: CcsService,
  ) {}

  //^ GET

  @Get('bachelor-of-information-technology/minor-subjects/techno')
  async findTechnoForCoe() {
    try {
      const schedules = await this.ccsService.findTechnoForCoe();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('mechanical-engineering/minor-subjects')
  async findMinorSubjectsBsme() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsme();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('mechanical-engineering/minor-subjects/1st-year')
  async findMinorSubjectsBsmeFirstYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsmeFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('mechanical-engineering/minor-subjects/2nd-year')
  async findMinorSubjectsBsmeSecondYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsmeSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('mechanical-engineering/minor-subjects/3rd-year')
  async findMinorSubjectsBsmeThirdYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsmeThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

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

  //* CIVIL ENGINEERING
  @Get('civil-engineering')
  async findAllBsce() {
    try {
      const schedules = await this.CoeService.findAllBsce();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('civil-engineering/minor-subjects')
  async findMinorSubjectsBsce() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsce();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('civil-engineering/minor-subjects/1st-year')
  async findMinorSubjectsBsceFirstYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsceFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('civil-engineering/minor-subjects/2nd-year')
  async findMinorSubjectsBsceSecondYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsceSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering')
  async findAllBsie() {
    try {
      const schedules = await this.CoeService.findAllBsie();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering/minor-subjects')
  async findMinorSubjectsBsie() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsie();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering/minor-subjects/1st-year')
  async findMinorSubjectsBsieFirstYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsieFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering/minor-subjects/2nd-year')
  async findMinorSubjectsBsieSecondYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsieSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering/minor-subjects/3rd-year')
  async findMinorSubjectsBsieThirdYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsieThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering')
  async findAllBsee() {
    try {
      const schedules = await this.CoeService.findAllBsee();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering/minor-subjects')
  async findMinorSubjectsBsee() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBsee();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering/minor-subjects/1st-year')
  async findMinorSubjectsBseeFirstYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBseeFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering/minor-subjects/2nd-year')
  async findMinorSubjectsBseeSecondYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBseeSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering/minor-subjects/3rd-year')
  async findMinorSubjectsBseeThirdYear() {
    try {
      const schedules = await this.CteService.findMinorSubjectsBseeThirdYear();
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

  @Get('civil-engineering/1st-year')
  async findFirstYearBsce() {
    try {
      const schedules = await this.CoeService.findFirstYearBsce();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('civil-engineering/2nd-year')
  async findSecondYearBsce() {
    try {
      const schedules = await this.CoeService.findSecondYearBsce();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('civil-engineering/3rd-year')
  async findThirdYearBsce() {
    try {
      const schedules = await this.CoeService.findThirdYearBsce();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('civil-engineering/4th-year')
  async findFourthYearBsce() {
    try {
      const schedules = await this.CoeService.findFourthYearBsce();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering/1st-year')
  async findFirstYearBsie() {
    try {
      const schedules = await this.CoeService.findFirstYearBsie();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering/2nd-year')
  async findSecondYearBsie() {
    try {
      const schedules = await this.CoeService.findSecondYearBsie();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering/3rd-year')
  async findThirdYearBsie() {
    try {
      const schedules = await this.CoeService.findThirdYearBsie();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('industrial-engineering/4th-year')
  async findFourthYearBsie() {
    try {
      const schedules = await this.CoeService.findFourthYearBsie();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering/1st-year')
  async findFirstYearBsee() {
    try {
      const schedules = await this.CoeService.findFirstYearBsee();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering/2nd-year')
  async findSecondYearBsee() {
    try {
      const schedules = await this.CoeService.findSecondYearBsee();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering/3rd-year')
  async findThirdYearBsee() {
    try {
      const schedules = await this.CoeService.findThirdYearBsee();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('electrical-engineering/4th-year')
  async findFourthYearBsee() {
    try {
      const schedules = await this.CoeService.findFourthYearBsee();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //^ POST
  @Post('mechanical-engineering')
  async create(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CoeService.create(createFirstDto);
    // await this.CoeService.transferSchedules();

    return newSchedule;
  }

  @Post('civil-engineering')
  async createbsce(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CoeService.createbsce(createFirstDto);
    // await this.CoeService.transferSchedules();

    return newSchedule;
  }

  @Post('electrical-engineering')
  async createbsee(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CoeService.createbsee(createFirstDto);
    // await this.CoeService.transferSchedules();

    return newSchedule;
  }

  @Post('industrial-engineering')
  async createbsie(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.CoeService.createbsie(createFirstDto);
    // await this.CoeService.transferSchedules();

    return newSchedule;
  }

  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  //^ PUT
  @Put('mechanical-engineering/:id')
  async update(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CoeService.update(id, updateFirstDto);
  }

  @Put('civil-engineering/:id')
  async updatebsce(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CoeService.updatebsce(id, updateFirstDto);
  }

  @Put('electrical-engineering/:id')
  async updatebsee(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CoeService.updatebsee(id, updateFirstDto);
  }

  @Put('industrial-engineering/:id')
  async updatebsie(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.CoeService.updatebsie(id, updateFirstDto);
  }

  //^ DELETE
  @Delete('mechanical-engineering/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.CoeService.delete(id);
  }

  @Delete('civil-engineering/:id')
  async deletebsce(@Param('id') id: number): Promise<void> {
    await this.CoeService.deletebsce(id);
  }

  @Delete('electrical-engineering/:id')
  async deletebsee(@Param('id') id: number): Promise<void> {
    await this.CoeService.deletebsee(id);
  }

  @Delete('industrial-engineering/:id')
  async deletebsie(@Param('id') id: number): Promise<void> {
    await this.CoeService.deletebsie(id);
  }

  @Get('teacher/:teacher')
  async getTeacherSchedulesByTeacherName(
    @Param('teacher') teacher: string,
  ): Promise<TeacherSchedule[]> {
    return await this.CoeService.getTeacherSchedulesByTeacherName(teacher);
  }
}
