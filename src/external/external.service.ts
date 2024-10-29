import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { Cron } from '@nestjs/schedule';

import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExternalService {
  constructor(
    private readonly httpService: HttpService,

    @InjectRepository(TeacherSchedule)
    private teacherSchedule: Repository<TeacherSchedule>,
  ) {}
  private readonly logger = new Logger(ExternalService.name);
  private quoteApiUrl = 'https://zenquotes.io/api/today';

  //^ QUOTE
  async getQuoteOfTheDay(): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(this.quoteApiUrl),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Error fetching the quote of the day',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

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

  //^ GET SUBJECTS BY DEPARTMENT CODE
  async getSubjectsByDepartmentCode(departmentCodeForClass: string) {
    const url = process.env.EXTERNAL_SUBJECTS; // Ensure this is set in your .env file
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

    // Filter by departmentCodeForClass
    const filteredSubjects = dataList.filter(
      (item) => item.departmentCodeForClass === departmentCodeForClass,
    );

    console.log('Filtered Subjects:', filteredSubjects);
    return filteredSubjects;
  }

  //^ GET ALL SUBJECTs
  async getAllSubjects() {
    const url = process.env.EXTERNAL_SUBJECTS; // Ensure this URL is correct in your .env file

    try {
      const request = this.httpService.get(url).pipe(
        map((res) => res.data),
        catchError((err) => {
          err.config.auth = undefined; // Hide Auth Details for security
          console.error('Error fetching subjects from external API:', err);
          throw new HttpException(
            'Error fetching subject data',
            HttpStatus.BAD_REQUEST,
          );
        }),
      );

      const extResponse = await lastValueFrom(request);

      const dataList =
        extResponse['Results'] || extResponse['data'] || extResponse || [];

      return dataList;
    } catch (error) {
      console.error('Error in getAllSubjects:', error);
      throw new HttpException(
        'Failed to retrieve subjects data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //^ GET SUBJECT BY CODE
  async getSubjectBySubjectCode(courseCode: string) {
    const url = process.env.EXTERNAL_SUBJECTS;

    try {
      const request = this.httpService.get(url).pipe(
        map((res) => res.data),
        catchError((err) => {
          console.log('Error in HTTP request:', err.message);
          this.logger.error('Error fetching from external API:', err.message);
          throw new HttpException(
            'Failed to fetch data from the external service',
            HttpStatus.BAD_REQUEST,
          );
        }),
      );

      const extResponse = await lastValueFrom(request);

      const dataList =
        extResponse['Results'] || extResponse['data'] || extResponse || [];
      console.log('Parsed Data List Length:', dataList.length);

      // Log the structure of the first item in dataList
      if (dataList.length > 0) {
        console.log('Sample Item Keys:', Object.keys(dataList[0]));
        console.log('Sample Item:', dataList[0]);
      }

      // Check if each item has a courseCode field
      dataList.forEach((item, index) => {
        if (item.courseCode) {
          console.log(`Item ${index} courseCode:`, item.courseCode);
        } else {
          console.log(`Item ${index} has no courseCode`);
        }
      });

      // Attempt to filter by courseCode
      const subject = dataList.find(
        (item) => item.courseCode?.toLowerCase() === courseCode.toLowerCase(),
      );

      if (!subject) {
        this.logger.warn(`Subject not found with courseCode: ${courseCode}`);
        return null;
      }

      this.logger.log('Found subject:', subject);
      return subject;
    } catch (error) {
      console.error('Error processing the subject retrieval:', error.message);
      throw new HttpException(
        'Failed to retrieve subject data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //^ GET ROOMS
  async getRooms() {
    const url = process.env.EXTERNAL_ROOMS; // Ensure the URL is set in your .env file

    try {
      const request = this.httpService.get(url).pipe(
        map((res) => res.data),
        catchError((err) => {
          err.config.auth = undefined; // Hide auth details
          this.logger.error(err);
          throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }),
      );

      const extResponse = await lastValueFrom(request);

      // Log the full response to inspect structure
      console.log(
        'Full External API Response:',
        JSON.stringify(extResponse, null, 2),
      );

      // Extract the relevant data list
      const dataList =
        extResponse['Results'] || extResponse['data'] || extResponse || [];

      // Log the extracted data list for debugging
      console.log('Extracted dataList:', JSON.stringify(dataList, null, 2));

      if (!dataList.length) {
        console.log('No rooms found in the data list');
        return null;
      }

      // Filter the data to get only rooms (where isRoom is true)
      const rooms = dataList.filter((item) => item.isRoom);

      if (!rooms.length) {
        console.log('No rooms found with isRoom: true');
        return [];
      }

      console.log('Found rooms:', rooms);
      return rooms;
    } catch (error) {
      console.error('Error fetching data from the external API:', error);
      throw new HttpException(
        'Failed to retrieve rooms',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  //^ GET ROOM BY ID
  async getRoomByName(roomName) {
    const url = process.env.EXTERNAL_ROOMS; // Ensure the URL is set in your .env file

    try {
      const request = this.httpService.get(url).pipe(
        map((res) => res.data),
        catchError((err) => {
          err.config.auth = undefined; // Hide auth details
          this.logger.error(err);
          throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }),
      );

      const extResponse = await lastValueFrom(request);

      // Log the full response to inspect structure
      console.log(
        'Full External API Response:',
        JSON.stringify(extResponse, null, 2),
      );

      // Extract the relevant data list
      const dataList =
        extResponse['Results'] || extResponse['data'] || extResponse || [];

      // Log the extracted data list for debugging
      console.log('Extracted dataList:', JSON.stringify(dataList, null, 2));

      if (!dataList.length) {
        console.log('No rooms found in the data list');
        return null;
      }

      // Filter the data to get the specific room by ID
      const room = dataList.find(
        (item) => item.isRoom && item.roomName === roomName,
      );

      if (!room) {
        console.log(`No room found with ID: ${roomName}`);
        return null;
      }

      console.log('Found room:', room);
      return room;
    } catch (error) {
      console.error('Error fetching data from the external API:', error);
      throw new HttpException(
        'Failed to retrieve the room',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  //^ GET ROOM SCHEDULE
  async getRoomSchedule(room: string): Promise<TeacherSchedule[]> {
    return await this.teacherSchedule.find({
      where: { room: room },
    });
  }

  //^ GET TEACHER BY NAME
  async getTeacherByName(name: string) {
    const url = process.env.EXTERNAL_ENDPOINT; // Ensure this is the endpoint that returns teacher data
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
      const dataList =
        extResponse['Results'] || extResponse['data'] || extResponse || [];

      // Filter by name
      const teacher = dataList.find(
        (item) => item.name && item.name.toLowerCase() === name.toLowerCase(),
      );

      if (!teacher) {
        console.log('Teacher not found with name:', name);
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
