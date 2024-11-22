import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { ExternalService } from './external.service';

export class Teacher {
  employee_id: number;
  firstName: string;
  lastName: string;
  // Other fields
}

export class Subject {
  courseCode: string;
  courseDescription: string;
  unit: number;
}

@Controller('external')
export class ExternalController {
  constructor(private readonly externalService: ExternalService) {}

  /**
   * GET datas by departmentName or departmentCode from test Endpoint
   * @returns filtered datas
   */

  @Get('quote/today')
  async getQuoteOfTheDay() {
    return await this.externalService.getQuoteOfTheDay();
  }

  @Get('datas/campus/:campusName/department/:departmentName')
  async getDatasByCampusAndDepartment(
    @Param('campusName') campusName: string,
    @Param('departmentName') departmentName: string,
  ) {
    const filteredData =
      await this.externalService.getDatasByCampusAndDepartment(
        campusName,
        departmentName,
      );
    return filteredData;
  }

  //^ GET TEACHER
  @Get('datas/teacher/:id')
  async getTeacherByEmployeeId(
    @Param('id') employee_id: number,
  ): Promise<Teacher> {
    return this.externalService.getTeacherByEmployeeId(employee_id);
  }

  //^ GET SUBJECTS BY SEARCH
  @Get('datas/subjects/search')
  async getSubjectBySubjectCode(@Query('courseCode') courseCode: string) {
    if (!courseCode) {
      throw new HttpException(
        'courseCode query parameter is required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const subject = await this.externalService.getSubjectBySubjectCode(
      courseCode,
    );

    if (!subject) {
      throw new HttpException('Subject not found', HttpStatus.NOT_FOUND);
    }

    return subject;
  }

  //^ GET SUBJECTS BY DEPARTMENT
  @Get('datas/subjects/:departmentCodeForClass')
  async getSubjectsByDepartmentCode(
    @Param('departmentCodeForClass') departmentCodeForClass: string,
  ): Promise<Subject[]> {
    return this.externalService.getSubjectsByDepartmentCode(
      departmentCodeForClass,
    );
  }

  //^ GET TEACHER BY SEARCH
  @Get('datas/teachers/search')
  async getTeacherByName(@Query('name') name: string) {
    const teacher = await this.externalService.getTeacherByName(name);
    // Ensure the response is an array
    return Array.isArray(teacher) ? teacher : [teacher];
  }

  //^ GET SUBJECTS
  @Get('datas/subjects')
  async getSubjects() {
    return this.externalService.getAllSubjects();
  }

  //^ GET ROOMS
  @Get('datas/rooms')
  async getRooms() {
    return this.externalService.getRooms();
  }

  //^ GET ROOM NAME
  @Get('datas/rooms/:roomName')
  async getRoomByName(@Param('roomName') roomName: number) {
    return this.externalService.getRoomByName(roomName);
  }

  //^ GET ROOM SCHEDULE
  @Get('datas/rooms/schedule/:room')
  async getRoomSchedule(@Param('room') room: string) {
    try {
      const schedule = await this.externalService.getRoomSchedule(room);

      if (!schedule || schedule.length === 0) {
        throw new HttpException(
          'No schedule found for the specified room',
          HttpStatus.NOT_FOUND,
        );
      }

      return schedule;
    } catch (error) {
      console.error('Error fetching room schedule:', error);
      throw new HttpException(
        'Failed to retrieve the schedule',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  //^ GET ALL SEMESTER
  @Get('datas/all-semester')
  async getAllSemester() {
    return this.externalService.getAllSemester();
  }

  @Get('datas/fetch-classes')
  async fetchClasses() {
    return this.externalService.fetchClass();
  }
}
