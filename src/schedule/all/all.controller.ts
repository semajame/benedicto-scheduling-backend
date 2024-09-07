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

import { AllService } from './all.service';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
// import { All } from 'src/typeorm';

@Controller('schedule')
export class AllController {
  constructor(private readonly allService: AllService) {}

  @Get('all-year')
  async findAll() {
    try {
      const schedules = await this.allService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('all-year')
  async create(@Body() createFirstDto: CreateFirstDto) {
    // Create the new schedule
    const newSchedule = await this.allService.create(createFirstDto);
    await this.allService.transferSchedules();

    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Put('all-year/:id')
  async update(
    @Param('id') id: number,
    @Body() updateFirstDto: UpdateFirstDto,
  ): Promise<void> {
    await this.allService.update(id, updateFirstDto);
  }

  @Delete('all-year/:id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.allService.delete(id);
  }
}
