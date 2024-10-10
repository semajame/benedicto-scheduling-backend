// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Param,
//   Body,
//   Res,
//   HttpStatus,
//   HttpException,
// } from '@nestjs/common';
// import { Response } from 'express';
// import { TeacherService } from './teachers.service';
// import { CreateTeacherDto } from './dto/create-teacher.dto';
// import { UpdateTeacherDto } from './dto/update-teacher.dto';

// @Controller('teachers')
// export class TeacherController {
//   constructor(private readonly teacherService: TeacherService) {}

//   @Get('all-teachers')
//   async findAll(@Res() res: Response) {
//     try {
//       const teachers = await this.teacherService.findAll();
//       return res.status(HttpStatus.OK).json(teachers);
//     } catch (err) {
//       return res
//         .status(HttpStatus.INTERNAL_SERVER_ERROR)
//         .json({ error: err.message });
//     }
//   }

//   @Get(':id')
//   async findOne(@Param('id') id: number, @Res() res: Response) {
//     try {
//       const teacher = await this.teacherService.findOne(id);
//       return res.status(HttpStatus.OK).json(teacher);
//     } catch (err) {
//       return res
//         .status(HttpStatus.NOT_FOUND)
//         .json({ error: 'Teacher not found' });
//     }
//   }

//   @Get('all-subjects')
//   async getAllSchedules(@Res() res: Response) {
//     try {
//       const schedules = await this.teacherService.getAllSchedules();
//       const formattedSchedules = schedules.map((schedule) => ({
//         id: schedule.id,
//         // employee_id: schedule.employee_id,
//         subject_code: schedule.subject_code,
//         subject: schedule.subject,
//         units: schedule.units,
//         room: schedule.room,
//         start: schedule.start,
//         end: schedule.end,
//         day: schedule.day,
//       }));
//       return res.status(HttpStatus.OK).json(formattedSchedules);
//     } catch (err) {
//       console.error('Error retrieving all schedules:', err);
//       return res
//         .status(HttpStatus.INTERNAL_SERVER_ERROR)
//         .json({ error: err.message });
//     }
//   }

//   @Get('schedules/:employee_id')
//   async getTeacherSchedule(
//     @Param('employee_id') employee_id: number,
//     @Res() res: Response,
//   ) {
//     try {
//       const schedules =
//         await this.teacherService.getTeacherSchedulesByTeacherId(employee_id);
//       const formattedSchedules = schedules.map((schedule) => ({
//         id: schedule.id,
//         // employee_id: schedule.employee_id,
//         // teacherName: schedule.name, // Teacher name is fetched from the API
//         subject_code: schedule.subject_code,
//         subject: schedule.subject,
//         units: schedule.units,
//         room: schedule.room,
//         start: schedule.start,
//         end: schedule.end,
//         day: schedule.day,
//       }));
//       return res.status(HttpStatus.OK).json(formattedSchedules);
//     } catch (err) {
//       console.error('Error retrieving teacher schedule:', err);
//       return res
//         .status(HttpStatus.NOT_FOUND)
//         .json({ error: 'Schedule not found' });
//     }
//   }

//   @Post('add-teacher')
//   async create(
//     @Body() createTeacherDto: CreateTeacherDto,
//     @Res() res: Response,
//   ) {
//     try {
//       const newTeacher = await this.teacherService.create(createTeacherDto);
//       return res.status(HttpStatus.CREATED).json(newTeacher);
//     } catch (err) {
//       return res
//         .status(HttpStatus.INTERNAL_SERVER_ERROR)
//         .json({ error: err.message });
//     }
//   }

//   @Put('edit-teacher/:id')
//   async update(
//     @Param('id') id: number,
//     @Body() updateTeacherDto: UpdateTeacherDto,
//     @Res() res: Response,
//   ) {
//     try {
//       const updatedTeacher = await this.teacherService.update(
//         id,
//         updateTeacherDto,
//       );
//       return res.status(HttpStatus.OK).json(updatedTeacher);
//     } catch (err) {
//       return res
//         .status(HttpStatus.INTERNAL_SERVER_ERROR)
//         .json({ error: err.message });
//     }
//   }

//   @Delete('delete-teacher/:id')
//   async remove(@Param('id') id: number, @Res() res: Response) {
//     try {
//       await this.teacherService.remove(id);
//       return res
//         .status(HttpStatus.OK)
//         .json({ message: 'Teacher deleted successfully' });
//     } catch (err) {
//       return res
//         .status(HttpStatus.INTERNAL_SERVER_ERROR)
//         .json({ error: err.message });
//     }
//   }
// }
