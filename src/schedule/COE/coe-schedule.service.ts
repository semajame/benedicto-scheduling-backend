import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { bsmeScheduleEntity } from 'src/typeorm';

import { Repository } from 'typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Injectable()
export class coeService {
  constructor(
    @InjectRepository(bsmeScheduleEntity)
    private readonly bsmeScheduleRepository: Repository<bsmeScheduleEntity>,

    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,
  ) {}

  //^ GET TEACHER SCHEDULE BY TEACHER NAME
  async getTeacherSchedulesByTeacherName(
    teacher: string,
  ): Promise<TeacherSchedule[]> {
    return await this.teacherScheduleRepository.find({
      where: { teacher: teacher },
    });
  }

  //^ GET
  async findAll(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find();
  }

  async findFirstYear(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findSecondYear(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findThirdYear(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findFourthYear(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find({
      where: { year: 4 },
    });
  }

  //^ POST
  async create(createFirstDto: CreateFirstDto): Promise<bsmeScheduleEntity> {
    const newSchedule = this.bsmeScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bsmeScheduleRepository.save(newSchedule);

    const newTeacherSchedule = this.teacherScheduleRepository.create({
      teacher: createFirstDto.teacher, // Use teacher's name from createFirstDto
      subject_code: createFirstDto.subject_code,
      subject: createFirstDto.subject,
      units: createFirstDto.units,
      room: createFirstDto.room,
      start: createFirstDto.start,
      end: createFirstDto.end,
      day: createFirstDto.day,
      transferIdBsed: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  //^ PUT
  async update(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bsmeScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bsmeScheduleRepository.save(existingFirst);
  }

  //^ DELETE
  async delete(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBsed: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bsmeScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}
