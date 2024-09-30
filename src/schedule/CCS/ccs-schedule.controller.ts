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

import { CcsService } from './ccs-schedule.service';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
// import { First } from 'src/typeorm';

@Controller('schedule')
export class CcsController {
  constructor(private readonly ccsService: CcsService) {}

  @Get('bachelor-of-information-technology')
  async findAll() {
    try {
      const schedules = await this.ccsService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put('bachelor-of-information-technology/:id')
  async update(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.ccsService.update(id, updateFirstDto);
  }

  @Delete('bachelor-of-information-technology/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.ccsService.delete(id);
  }

  @Get('bachelor-of-information-technology/1st-year')
  async findFirstYear() {
    try {
      const schedules = await this.ccsService.findFirstYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('bachelor-of-information-technology/2nd-year')
  async findSecondYear() {
    try {
      const schedules = await this.ccsService.findSecondYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('bachelor-of-information-technology/3rd-year')
  async findThirdYear() {
    try {
      const schedules = await this.ccsService.findThirdYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('bachelor-of-information-technology/4th-year')
  async findFourthYear() {
    try {
      const schedules = await this.ccsService.findFourthYear();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('bachelor-of-information-technology')
  async create(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.ccsService.create(createFirstDto);
    await this.ccsService.transferSchedules();

    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
