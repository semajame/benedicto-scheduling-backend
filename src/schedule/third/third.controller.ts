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

import { ThirdService } from './third.service';
import { CreateThirdDto } from './dto/create-first.dto';
import { UpdateThirdDto } from './dto/update-first.dto';
import { First } from 'src/typeorm';

@Controller('schedule')
export class ThirdController {
  constructor(private readonly thirdService: ThirdService) {}

  @Get('3rd-year')
  async findAll() {
    try {
      const schedules = await this.thirdService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('3rd-year')
  async create(@Body() createThirdDto: CreateThirdDto) {
    // Create the new schedule
    const newSchedule = await this.thirdService.create(createThirdDto);
    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Put('3rd-year/:id')
  async update(
    @Param('id') id: number,
    @Body() updateThirdDto: UpdateThirdDto,
  ): Promise<First> {
    return this.thirdService.update(id, updateThirdDto);
  }

  @Delete('3rd-year/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.thirdService.delete(id);
  }
}
