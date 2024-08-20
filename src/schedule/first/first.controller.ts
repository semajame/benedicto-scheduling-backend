import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { FirstService } from './first.service';
import { CreateFirstDto } from './dto/create-first.dto';
// import { UpdateFirstDto } from './dto/update-first.dto';

@Controller('first')
export class FirstController {
  constructor(private readonly firstService: FirstService) {}

  @Get()
  async findAll() {
    try {
      const schedules = await this.firstService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async create(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.firstService.create(createFirstDto);
    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
