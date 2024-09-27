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

import { CalendarService } from './calendar.service';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
// import { First } from 'src/typeorm';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get('event')
  async findAll() {
    try {
      const schedules = await this.calendarService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('event')
  async create(@Body() createCalendarDto: CreateCalendarDto) {
    // Create the new schedule
    const newSchedule = await this.calendarService.create(createCalendarDto);
    return newSchedule;
  }

  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Put('event/:id')
  async update(
    @Param('id') id: number,
    @Body() updateCalendarDto: UpdateCalendarDto,
  ): Promise<void> {
    await this.calendarService.update(id, updateCalendarDto);
  }

  @Delete('event/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.calendarService.delete(id);
  }
}
