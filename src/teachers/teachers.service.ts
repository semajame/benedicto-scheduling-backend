import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';

import { TeacherSchedule } from './entities/teacher_subjects.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,

    private readonly httpService: HttpService,
  ) {
    console.log('TeacherController initialized');
  }

  async getAllSchedules(): Promise<TeacherSchedule[]> {
    return await this.teacherScheduleRepository.find({
      select: {
        id: true,
        teacher_id: true,
        subject_id: true,
        subject_code: true,
        teacher: true,
        subject: true,
        units: true,
        room: true,
        start: true,
        end: true,
        day: true,
        semester: true,
        semester_id: true,
        school_year: true,
        recurrencePattern: true,
        background: true,
      },
    });
  }

  async findAll(): Promise<any[]> {
    // Adjust the return type if needed
    const url = process.env.EXTERNAL_ENDPOINT;

    try {
      const response = await this.httpService.get(url).toPromise(); // Await the HTTP request
      return response.data; // Assuming the response data is an array of teachers
    } catch (err) {
      // Hide Auth Details
      if (err.config) {
        err.config.auth = undefined;
      }
    }
  }

  async getTeacherSchedulesByTeacherId(
    teacher_id: number,
  ): Promise<TeacherSchedule[]> {
    return this.teacherScheduleRepository.find({
      where: { teacher_id },
    });
  }
}
