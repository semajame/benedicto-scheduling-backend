import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSecondDto } from './dto/create-first.dto';
import { UpdateSecondDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { Second } from './entities/second.entity';
import { Repository } from 'typeorm';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { error } from 'console';

@Injectable()
export class SecondService {
  constructor(
    @InjectRepository(Second)
    private readonly secondRepository: Repository<Second>,

    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,

    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,
  ) {}

  // async findOneBySubjectCode(
  //   subject_code: string,
  // ): Promise<FirstService | undefined> {
  //   return await this.secondRepository.findOne({ where: { subject_code } });
  // }

  //^ GET
  async findAll(): Promise<Second[]> {
    return await this.secondRepository.find();
  }

  //^ POST
  async create(createSecondDto: CreateSecondDto): Promise<Second> {
    const newSchedule = this.secondRepository.create({ ...createSecondDto });
    return await this.secondRepository.save(newSchedule);
  }

  async transferSchedules(): Promise<void> {
    const secondSchedules = await this.secondRepository.find({
      where: { transferred: false }, // Only get schedules that haven't been transferred
    });

    for (const schedule of secondSchedules) {
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
      teacherSchedule.secondId = schedule.id;

      try {
        await this.teacherScheduleRepository.save(teacherSchedule);
        schedule.transferred = true;
        await this.secondRepository.save(schedule);
      } catch (error) {
        console.error('Error saving teacher schedule:', error);
      }
    }
  }

  //^ PUT
  async update(id: number, updateSecondDto: UpdateSecondDto): Promise<Second> {
    const existingSchedule = await this.secondRepository.findOneBy({ id });
    if (!existingSchedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    Object.assign(existingSchedule, updateSecondDto);
    return await this.secondRepository.save(existingSchedule);
  }

  //^ DELETE
  // async delete(id: number): Promise<void> {
  //   // Delete the Second entity
  //   const result = await this.secondRepository.delete(id);
  //   if (result.affected === 0) {
  //     throw new NotFoundException(`Appointment with ID ${id} not found`);
  //   }

  //   // Optionally, handle related schedules if cascade delete is not working as expected
  //   const deleteRelatedResult = await this.teacherScheduleRepository.delete({
  //     id: id, // Use the correct foreign key column for the Second entity
  //   });

  //   if (deleteRelatedResult.affected === 0) {
  //     console.warn(`No related teacher schedules found for schedule ID ${id}`);
  //   }
  // }

  async delete(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      secondId: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.secondRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}
