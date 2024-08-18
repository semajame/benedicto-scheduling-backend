import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { TeacherService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get('all-teachers')
  async findAll(@Res() res: Response) {
    try {
      const teachers = await this.teacherService.findAll();
      res.json(teachers);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      const teacher = await this.teacherService.findOne(id);
      res.json(teacher);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  @Post('add-teacher')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createTeacherDto: CreateTeacherDto,

    @Res() res: Response,
  ) {
    try {
      const newTeacher = await this.teacherService.create(createTeacherDto);
      res.status(HttpStatus.CREATED).json(newTeacher);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  @Put('edit-teacher/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(FileInterceptor('file'))
  async update(
    @Param('id') id: number,
    @Body() updateTeacherDto: UpdateTeacherDto,

    @Res() res: Response,
  ) {
    try {
      const updatedTeacher = await this.teacherService.update(
        id,
        updateTeacherDto,
      );
      res.status(HttpStatus.OK).json(updatedTeacher);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }

  @Delete('delete-teacher/:id')
  async remove(@Param('id') id: number, @Res() res: Response) {
    try {
      await this.teacherService.remove(id);
      res
        .status(HttpStatus.OK)
        .json({ message: 'Teacher deleted successfully' });
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
  }
}
