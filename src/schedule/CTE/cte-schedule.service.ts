import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFirstDto } from './BSED/dto/create-first.dto';
import { UpdateFirstDto } from './BSED/dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { bsedScheduleEntity } from './BSED/entities/bsed-schedule.entity';
import { Repository } from 'typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { error } from 'console';

@Injectable()
export class cteService {
  constructor(
    @InjectRepository(bsedScheduleEntity)
    private readonly bsedScheduleRepository: Repository<bsedScheduleEntity>,

    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,

    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,
  ) {}

  //^ GET
  async findAll(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find();
  }

  async findFirstYear(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findSecondYear(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findThirdYear(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findFourthYear(): Promise<bsedScheduleEntity[]> {
    return await this.bsedScheduleRepository.find({
      where: { year: 4 },
    });
  }

  async transferSchedules(): Promise<void> {
    const firstSchedules = await this.bsedScheduleRepository.find({
      where: { transferred: false }, // Only get schedules that haven't been transferred
    });

    for (const schedule of firstSchedules) {
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
      teacherSchedule.firstId = schedule.id;

      try {
        await this.teacherScheduleRepository.save(teacherSchedule);
        schedule.transferred = true;
        await this.bsedScheduleRepository.save(schedule);
      } catch (error) {
        console.error('Error saving teacher schedule:', error);
      }
    }
  }

  //^ POST
  async create(createFirstDto: CreateFirstDto): Promise<bsedScheduleEntity> {
    const newSchedule = this.bsedScheduleRepository.create({
      ...createFirstDto,
    });
    return await this.bsedScheduleRepository.save(newSchedule);
  }

  //^ PUT
  async update(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bsedScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bsedScheduleRepository.save(existingFirst);

    // Update related TeacherSchedule entities
    // if (
    //   existingFirst.teacherSchedules &&
    //   existingFirst.teacherSchedules.length > 0
    // ) {
    //   for (const teacherSchedule of existingFirst.teacherSchedules) {
    //     // Update the related TeacherSchedule fields
    //     teacherSchedule.subject_code = existingFirst.subject_code;
    //     teacherSchedule.subject = existingFirst.subject;
    //     teacherSchedule.units = existingFirst.units;
    //     teacherSchedule.room = existingFirst.room;
    //     teacherSchedule.start = existingFirst.start;
    //     teacherSchedule.end = existingFirst.end;
    //     teacherSchedule.day = existingFirst.day;

    //     // Save updated TeacherSchedule entity
    //     await this.teacherScheduleRepository.save(teacherSchedule);
    //   }
    // }
  }

  //^ DELETE
  async delete(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      firstId: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bsedScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}
