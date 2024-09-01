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

import { FourthService } from './fourth.service';
import { CreateFourthDto } from './dto/create-first.dto';
import { UpdateFourthDto } from './dto/update-first.dto';
import { Fourth } from 'src/typeorm';

@Controller('schedule')
export class FourthController {
  constructor(private readonly fourthService: FourthService) {}

  @Get('4th-year')
  async findAll() {
    try {
      const schedules = await this.fourthService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('4th-year')
  async create(@Body() createFourthDto: CreateFourthDto) {
    // Create the new schedule
    const newSchedule = await this.fourthService.create(createFourthDto);
    await this.fourthService.transferSchedules();
    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Put('4th-year/:id')
  async update(
    @Param('id') id: number,
    @Body() updateFourthDto: UpdateFourthDto,
  ): Promise<void> {
    await this.fourthService.update(id, updateFourthDto);
  }

  @Delete('4th-year/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.fourthService.delete(id);
  }
}
