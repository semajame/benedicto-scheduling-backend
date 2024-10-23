import { Controller, Get, Param } from '@nestjs/common';
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

  //^ GET SUBJECTS BY DEPARTMENT
  @Get('datas/subjects/:departmentCodeForClass')
  async getSubjectsByDepartmentCode(
    @Param('departmentCodeForClass') departmentCodeForClass: string,
  ): Promise<Subject[]> {
    return this.externalService.getSubjectsByDepartmentCode(
      departmentCodeForClass,
    );
  }

  //^ GET ROOMS

  @Get('datas/rooms')
  async getRooms() {
    return this.externalService.getRooms();
  }
}
