import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ExternalService {
  constructor(private readonly httpService: HttpService) {}
  private readonly logger = new Logger(ExternalService.name);

  //^ GET DATA TEACHERS
  async getDatasByCampusAndDepartment(
    campusName: string,
    departmentName: string,
  ) {
    const url = process.env.EXTERNAL_ENDPOINT; // Ensure this is set in your .env file
    const request = this.httpService.get(url).pipe(
      map((res) => res.data),
      catchError((err) => {
        err.config.auth = undefined; // Hide Auth Details
        this.logger.error(err);
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
      }),
    );

    const extResponse = await lastValueFrom(request);
    const dataList =
      extResponse['Results'] || extResponse['data'] || extResponse || [];

    // Filter by both campusName and departmentName
    const filteredData = dataList.filter(
      (item) =>
        item.campus &&
        item.department &&
        item.campus.campusName === campusName &&
        item.department.departmentName === departmentName,
    );

    console.log('filteredData...', filteredData);
    return filteredData;
  }

  //^ GET TEACHER BY ID
  async getTeacherByEmployeeId(employee_id: number) {
    const url = process.env.EXTERNAL_ENDPOINT; // Make sure the URL is correct and set in your .env file
    try {
      const request = this.httpService.get(url).pipe(
        map((res) => res.data),
        catchError((err) => {
          err.config.auth = undefined; // Hide Auth Details
          this.logger.error(err);
          throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }),
      );

      const extResponse = await lastValueFrom(request);

      // Log the response to inspect the structure
      console.log(
        'Full External API Response:',
        JSON.stringify(extResponse, null, 2),
      );

      // Extract the relevant data list
      const dataList =
        extResponse['Results'] || extResponse['data'] || extResponse || [];

      // Log the dataList to inspect its structure
      console.log('Extracted dataList:', JSON.stringify(dataList, null, 2));

      if (!dataList.length) {
        console.log('No teachers found in the data list');
        return null;
      }

      // Filter the list to find the teacher with the given employee_id
      const teacher = dataList.find(
        (item) =>
          String(item.employee_id) === String(employee_id) ||
          String(item.id) === String(employee_id) ||
          String(item.employeeId) === String(employee_id),
      );

      if (!teacher) {
        console.log('Teacher not found with employee_id:', employee_id);
        return null;
      }

      console.log('Found teacher:', teacher);
      return teacher;
    } catch (error) {
      console.error('Error fetching data from the external API:', error);
      throw new HttpException(
        'Failed to retrieve data',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }
}
