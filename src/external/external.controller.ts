import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ExternalService } from './external.service';

export class Teacher {
  employee_id: number;
  firstName: string;
  lastName: string;
  // Other fields
}

@Controller('external')
export class ExternalController {
  constructor(private readonly externalService: ExternalService) {}

  /**
   * GET datas by departmentName or departmentCode from test Endpoint
   * @returns filtered datas
   */
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

  @Get('datas/teacher/:id')
  async getTeacherByEmployeeId(
    @Param('id') employee_id: number,
  ): Promise<Teacher> {
    return this.externalService.getTeacherByEmployeeId(employee_id);
  }
}
