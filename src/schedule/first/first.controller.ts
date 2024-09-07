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

import { FirstService } from './first.service';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
// import { First } from 'src/typeorm';

@Controller('schedule')
export class FirstController {
  constructor(private readonly firstService: FirstService) {}

  @Get('1st-year')
  async findAll() {
    try {
      const schedules = await this.firstService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('1st-year')
  async create(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.firstService.create(createFirstDto);
    await this.firstService.transferSchedules();

    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Put('1st-year/:id')
  async update(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.firstService.update(id, updateFirstDto);
  }

  @Delete('1st-year/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.firstService.delete(id);
  }
}
