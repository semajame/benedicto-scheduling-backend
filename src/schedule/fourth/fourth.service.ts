import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFourthDto } from './dto/create-first.dto';
import { UpdateFourthDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { Fourth } from './entities/fourth.entity';
import { Repository } from 'typeorm';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { error } from 'console';

@Injectable()
export class FourthService {
  constructor(
    @InjectRepository(Fourth)
    private readonly fourthRepository: Repository<Fourth>,
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,

    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,
  ) {}

  // async findOneBySubjectCode(
  //   subject_code: string,
  // ): Promise<FirstService | undefined> {
  //   return await this.fourthRepository.findOne({ where: { subject_code } });
  // }

  //^ GET
  async findAll(): Promise<Fourth[]> {
    return await this.fourthRepository.find();
  }

  async transferSchedules(): Promise<void> {
    const fourthSchedules = await this.fourthRepository.find({
      where: { transferred: false }, // Only get schedules that haven't been transferred
    });

    for (const schedule of fourthSchedules) {
      // Find the teacher by name
      const teacher = await this.teacherRepository.findOne({
        where: {
          firstName: schedule.teacher.split(' ')[0],
          lastName: schedule.teacher.split(' ')[1],
        }, // Assumes the name is in "First Last" format
      });

      if (!teacher) {
        console.warn(
          `Teacher not found for schedule with subject code ${schedule.subject_code}`,
        );
        error; // Skip this schedule if the teacher is not found
      }

      const teacherSchedule = new TeacherSchedule();
      teacherSchedule.teacher = teacher; // Assuming teacher is a Teacher entity
      teacherSchedule.subject_code = schedule.subject_code;
      teacherSchedule.subject = schedule.subject;
      teacherSchedule.units = schedule.units;
      teacherSchedule.room = schedule.room;
      teacherSchedule.start = schedule.start;
      teacherSchedule.end = schedule.end;
      teacherSchedule.day = schedule.day;

      try {
        await this.teacherScheduleRepository.save(teacherSchedule);
        schedule.transferred = true;
        await this.fourthRepository.save(schedule);
      } catch (error) {
        console.error('Error saving teacher schedule:', error);
      }
    }
  }

  //^ POST
  async create(createFourthDto: CreateFourthDto): Promise<Fourth> {
    const newSchedule = this.fourthRepository.create({ ...createFourthDto });
    return await this.fourthRepository.save(newSchedule);
  }

  //^ PUT
  async update(id: number, updateFourthDto: UpdateFourthDto): Promise<Fourth> {
    const existingSchedule = await this.fourthRepository.findOneBy({ id });
    if (!existingSchedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    Object.assign(existingSchedule, updateFourthDto);
    return await this.fourthRepository.save(existingSchedule);
  }

  //^ DELETE
  async delete(id: number): Promise<void> {
    const result = await this.fourthRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }

    await this.teacherScheduleRepository.delete({ id: id });
  }
}
