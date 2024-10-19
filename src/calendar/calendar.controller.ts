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

// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   HttpException,
//   HttpStatus,
//   Put,
//   Param,
//   Delete,
//   UseGuards,
//   Req,
// } from '@nestjs/common';

// import { CalendarService } from './calendar.service';
// import { CreateCalendarDto } from './dto/create-calendar.dto';
// import { UpdateCalendarDto } from './dto/update-calendar.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { RolesGuard } from '../auth/guards/roles.guard'; // If you have roles guard
// import { Roles } from 'src/enums/role.decorator'; // If you have a roles decorator
// import { UserRole } from 'src/enums/role.enum'; // Import UserRole enum

// @Controller('calendar')
// export class CalendarController {
//   constructor(private readonly calendarService: CalendarService) {}

//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles(
//     UserRole.ADMIN,
//     UserRole.USER,
//     UserRole.CEA,
//     UserRole.CCS,
//     UserRole.COE,
//     UserRole.CBM,
//   )
//   @Get('event')
//   async findAll(@Req() req) {
//     const user = req.user; // Get the authenticated user's role
//     return this.calendarService.findEventsForUser(user.role); // Fetch events based on user role
//   }

//   @Post('event')
//   async create(@Body() createCalendarDto: CreateCalendarDto, @Req() req) {
//     const user = req.user; // Get the authenticated user's role
//     return this.calendarService.create(createCalendarDto, user.role); // Create event with user role
//   }

//   @Put('event/:id')
//   async update(
//     @Param('id') id: number,
//     @Body() updateCalendarDto: UpdateCalendarDto,
//   ): Promise<void> {
//     await this.calendarService.update(id, updateCalendarDto);
//   }

//   @Delete('event/:id')
//   async delete(@Param('id') id: number): Promise<void> {
//     await this.calendarService.delete(id);
//   }
// }
