import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { bsmeScheduleEntity } from 'src/typeorm';
import { bsceScheduleEntity } from 'src/typeorm';
import { bseeScheduleEntity } from 'src/typeorm';
import { bsieScheduleEntity } from 'src/typeorm';

import { Repository } from 'typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Injectable()
export class coeService {
  constructor(
    @InjectRepository(bsmeScheduleEntity)
    private readonly bsmeScheduleRepository: Repository<bsmeScheduleEntity>,

    @InjectRepository(bsceScheduleEntity)
    private readonly bsceScheduleRepository: Repository<bsceScheduleEntity>,

    @InjectRepository(bseeScheduleEntity)
    private readonly bseeScheduleRepository: Repository<bseeScheduleEntity>,

    @InjectRepository(bsieScheduleEntity)
    private readonly bsieScheduleRepository: Repository<bsieScheduleEntity>,

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

  async findAllBsce(): Promise<bsceScheduleEntity[]> {
    return await this.bsceScheduleRepository.find();
  }

  async findAllBsee(): Promise<bseeScheduleEntity[]> {
    return await this.bseeScheduleRepository.find();
  }

  async findAllBsie(): Promise<bsieScheduleEntity[]> {
    return await this.bsieScheduleRepository.find();
  }

  async findFirstYear(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findFirstYearBsce(): Promise<bsceScheduleEntity[]> {
    return await this.bsceScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findFirstYearBsee(): Promise<bseeScheduleEntity[]> {
    return await this.bseeScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findFirstYearBsie(): Promise<bsieScheduleEntity[]> {
    return await this.bsieScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findSecondYear(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findSecondYearBsce(): Promise<bsceScheduleEntity[]> {
    return await this.bsceScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findSecondYearBsee(): Promise<bseeScheduleEntity[]> {
    return await this.bseeScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findSecondYearBsie(): Promise<bsieScheduleEntity[]> {
    return await this.bsieScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findThirdYear(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findThirdYearBsce(): Promise<bsceScheduleEntity[]> {
    return await this.bsceScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findThirdYearBsee(): Promise<bseeScheduleEntity[]> {
    return await this.bseeScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findThirdYearBsie(): Promise<bsieScheduleEntity[]> {
    return await this.bsieScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findFourthYear(): Promise<bsmeScheduleEntity[]> {
    return await this.bsmeScheduleRepository.find({
      where: { year: 4 },
    });
  }

  async findFourthYearBsce(): Promise<bsceScheduleEntity[]> {
    return await this.bsceScheduleRepository.find({
      where: { year: 4 },
    });
  }

  async findFourthYearBsee(): Promise<bseeScheduleEntity[]> {
    return await this.bseeScheduleRepository.find({
      where: { year: 4 },
    });
  }

  async findFourthYearBsie(): Promise<bsieScheduleEntity[]> {
    return await this.bsieScheduleRepository.find({
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
      subject_id: createFirstDto.subject_id,
      teacher_id: createFirstDto.teacher_id,
      teacher: createFirstDto.teacher, // Use teacher's name from createFirstDto
      subject_code: createFirstDto.subject_code,
      subject: createFirstDto.subject,
      units: createFirstDto.units,
      room: createFirstDto.room,
      start: createFirstDto.start,
      end: createFirstDto.end,
      day: createFirstDto.day,
      recurrencePattern: createFirstDto.recurrencePattern,
      background: createFirstDto.background,
      transferIdBsme: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  //^ BSCE
  async createbsce(
    createFirstDto: CreateFirstDto,
  ): Promise<bsceScheduleEntity> {
    const newSchedule = this.bsceScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bsceScheduleRepository.save(newSchedule);

    const newTeacherSchedule = this.teacherScheduleRepository.create({
      subject_id: createFirstDto.subject_id,
      teacher_id: createFirstDto.teacher_id,
      teacher: createFirstDto.teacher, // Use teacher's name from createFirstDto
      subject_code: createFirstDto.subject_code,
      subject: createFirstDto.subject,
      units: createFirstDto.units,
      room: createFirstDto.room,
      start: createFirstDto.start,
      end: createFirstDto.end,
      day: createFirstDto.day,
      recurrencePattern: createFirstDto.recurrencePattern,
      background: createFirstDto.background,
      transferIdBsce: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  async createbsee(
    createFirstDto: CreateFirstDto,
  ): Promise<bseeScheduleEntity> {
    const newSchedule = this.bseeScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bseeScheduleRepository.save(newSchedule);

    const newTeacherSchedule = this.teacherScheduleRepository.create({
      subject_id: createFirstDto.subject_id,
      teacher_id: createFirstDto.teacher_id,
      teacher: createFirstDto.teacher, // Use teacher's name from createFirstDto
      subject_code: createFirstDto.subject_code,
      subject: createFirstDto.subject,
      units: createFirstDto.units,
      room: createFirstDto.room,
      start: createFirstDto.start,
      end: createFirstDto.end,
      day: createFirstDto.day,
      recurrencePattern: createFirstDto.recurrencePattern,
      background: createFirstDto.background,
      transferIdBsee: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  async createbsie(
    createFirstDto: CreateFirstDto,
  ): Promise<bsieScheduleEntity> {
    const newSchedule = this.bsieScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bsieScheduleRepository.save(newSchedule);

    const newTeacherSchedule = this.teacherScheduleRepository.create({
      subject_id: createFirstDto.subject_id,
      teacher_id: createFirstDto.teacher_id,
      teacher: createFirstDto.teacher, // Use teacher's name from createFirstDto
      subject_code: createFirstDto.subject_code,
      subject: createFirstDto.subject,
      units: createFirstDto.units,
      room: createFirstDto.room,
      start: createFirstDto.start,
      end: createFirstDto.end,
      day: createFirstDto.day,
      recurrencePattern: createFirstDto.recurrencePattern,
      background: createFirstDto.background,
      transferIdBsie: savedSchedule.id, // Link with saved CcsSchedule
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

    if (
      existingFirst.teacherSchedules &&
      existingFirst.teacherSchedules.length > 0
    ) {
      for (const teacherSchedule of existingFirst.teacherSchedules) {
        // Update the related TeacherSchedule fields
        teacherSchedule.subject_id = existingFirst.subject_id;
        teacherSchedule.teacher_id = existingFirst.teacher_id;
        teacherSchedule.teacher = existingFirst.teacher;
        teacherSchedule.subject_code = existingFirst.subject_code;
        teacherSchedule.subject = existingFirst.subject;
        teacherSchedule.units = existingFirst.units;
        teacherSchedule.room = existingFirst.room;
        teacherSchedule.start = existingFirst.start;
        teacherSchedule.end = existingFirst.end;
        teacherSchedule.day = existingFirst.day;
        teacherSchedule.recurrencePattern = existingFirst.recurrencePattern;
        teacherSchedule.background = existingFirst.background;

        // Save updated TeacherSchedule entity
        await this.teacherScheduleRepository.save(teacherSchedule);
      }
    }
  }

  async updatebsce(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bsceScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bsceScheduleRepository.save(existingFirst);

    if (
      existingFirst.teacherSchedules &&
      existingFirst.teacherSchedules.length > 0
    ) {
      for (const teacherSchedule of existingFirst.teacherSchedules) {
        // Update the related TeacherSchedule fields
        teacherSchedule.subject_id = existingFirst.subject_id;
        teacherSchedule.teacher_id = existingFirst.teacher_id;
        teacherSchedule.teacher = existingFirst.teacher;
        teacherSchedule.subject_code = existingFirst.subject_code;
        teacherSchedule.subject = existingFirst.subject;
        teacherSchedule.units = existingFirst.units;
        teacherSchedule.room = existingFirst.room;
        teacherSchedule.start = existingFirst.start;
        teacherSchedule.end = existingFirst.end;
        teacherSchedule.day = existingFirst.day;
        teacherSchedule.recurrencePattern = existingFirst.recurrencePattern;
        teacherSchedule.background = existingFirst.background;

        // Save updated TeacherSchedule entity
        await this.teacherScheduleRepository.save(teacherSchedule);
      }
    }
  }

  async updatebsie(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bsieScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bsieScheduleRepository.save(existingFirst);

    if (
      existingFirst.teacherSchedules &&
      existingFirst.teacherSchedules.length > 0
    ) {
      for (const teacherSchedule of existingFirst.teacherSchedules) {
        // Update the related TeacherSchedule fields
        teacherSchedule.subject_id = existingFirst.subject_id;
        teacherSchedule.teacher_id = existingFirst.teacher_id;
        teacherSchedule.teacher = existingFirst.teacher;
        teacherSchedule.subject_code = existingFirst.subject_code;
        teacherSchedule.subject = existingFirst.subject;
        teacherSchedule.units = existingFirst.units;
        teacherSchedule.room = existingFirst.room;
        teacherSchedule.start = existingFirst.start;
        teacherSchedule.end = existingFirst.end;
        teacherSchedule.day = existingFirst.day;
        teacherSchedule.recurrencePattern = existingFirst.recurrencePattern;
        teacherSchedule.background = existingFirst.background;

        // Save updated TeacherSchedule entity
        await this.teacherScheduleRepository.save(teacherSchedule);
      }
    }
  }

  async updatebsee(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bseeScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bseeScheduleRepository.save(existingFirst);

    if (
      existingFirst.teacherSchedules &&
      existingFirst.teacherSchedules.length > 0
    ) {
      for (const teacherSchedule of existingFirst.teacherSchedules) {
        // Update the related TeacherSchedule fields
        teacherSchedule.subject_id = existingFirst.subject_id;
        teacherSchedule.teacher_id = existingFirst.teacher_id;
        teacherSchedule.teacher = existingFirst.teacher;
        teacherSchedule.subject_code = existingFirst.subject_code;
        teacherSchedule.subject = existingFirst.subject;
        teacherSchedule.units = existingFirst.units;
        teacherSchedule.room = existingFirst.room;
        teacherSchedule.start = existingFirst.start;
        teacherSchedule.end = existingFirst.end;
        teacherSchedule.day = existingFirst.day;
        teacherSchedule.recurrencePattern = existingFirst.recurrencePattern;
        teacherSchedule.background = existingFirst.background;

        // Save updated TeacherSchedule entity
        await this.teacherScheduleRepository.save(teacherSchedule);
      }
    }
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

  async deletebsce(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBsce: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bsceScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deletebsee(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBsee: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bseeScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deletebsie(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBsie: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bsieScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}
