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

import { SecondService } from './second.service';
import { CreateSecondDto } from './dto/create-first.dto';
import { UpdateSecondDto } from './dto/update-first.dto';
import { Second } from 'src/typeorm';

@Controller('schedule')
export class SecondController {
  constructor(private readonly secondService: SecondService) {}

  @Get('2nd-year')
  async findAll() {
    try {
      const schedules = await this.secondService.findAll();
      return schedules;
    } catch (err) {
      console.error('Error executing query:', err);
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('2nd-year')
  async create(@Body() createSecondDto: CreateSecondDto) {
    // Create the new schedule
    const newSchedule = await this.secondService.create(createSecondDto);
    return newSchedule;
  }
  catch(err) {
    console.error('Error executing query:', err);
    throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Put('2nd-year/:id')
  async update(
    @Param('id') id: number,
    @Body() updateSecondDto: UpdateSecondDto,
  ): Promise<Second> {
    return this.secondService.update(id, updateSecondDto);
  }

  @Delete('2nd-year/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.secondService.delete(id);
  }
}
