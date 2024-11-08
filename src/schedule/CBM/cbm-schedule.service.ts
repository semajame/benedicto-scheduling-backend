import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { bsaScheduleEntity } from './entities/bsa-schedule.entity';
import { bshrmScheduleEntity } from './entities/bshrm-schedule.entity';
import { bshmScheduleEntity } from './entities/bshm-schedule.entity';
import { bsmmScheduleEntity } from './entities/bsmm-schedule.entity';

import { Repository } from 'typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Injectable()
export class cbmService {
  constructor(
    @InjectRepository(bsaScheduleEntity)
    private readonly bsaScheduleRepository: Repository<bsaScheduleEntity>,

    @InjectRepository(bshrmScheduleEntity)
    private readonly bshrmScheduleRepository: Repository<bshrmScheduleEntity>,

    @InjectRepository(bshmScheduleEntity)
    private readonly bshmScheduleRepository: Repository<bshmScheduleEntity>,

    @InjectRepository(bsmmScheduleEntity)
    private readonly bsmmScheduleRepository: Repository<bsmmScheduleEntity>,

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
  async findAllBsa(): Promise<bsaScheduleEntity[]> {
    return await this.bsaScheduleRepository.find();
  }

  async findAllBshm(): Promise<bshmScheduleEntity[]> {
    return await this.bshmScheduleRepository.find();
  }

  async findAllBshrm(): Promise<bshrmScheduleEntity[]> {
    return await this.bshrmScheduleRepository.find();
  }

  async findAllBsmm(): Promise<bsmmScheduleEntity[]> {
    return await this.bsmmScheduleRepository.find();
  }

  async findFirstYearBsa(): Promise<bsaScheduleEntity[]> {
    return await this.bsaScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findFirstYearBshm(): Promise<bshmScheduleEntity[]> {
    return await this.bshmScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findFirstYearBsmm(): Promise<bsmmScheduleEntity[]> {
    return await this.bsmmScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findFirstYearBshrm(): Promise<bshrmScheduleEntity[]> {
    return await this.bshrmScheduleRepository.find({
      where: { year: 1 },
    });
  }

  async findSecondYearBsa(): Promise<bsaScheduleEntity[]> {
    return await this.bsaScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findSecondYearBshm(): Promise<bshmScheduleEntity[]> {
    return await this.bshmScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findSecondYearBshrm(): Promise<bshrmScheduleEntity[]> {
    return await this.bshrmScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findSecondYearBsmm(): Promise<bsmmScheduleEntity[]> {
    return await this.bsmmScheduleRepository.find({
      where: { year: 2 },
    });
  }

  async findThirdYearBsa(): Promise<bsaScheduleEntity[]> {
    return await this.bsaScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findThirdYearBshm(): Promise<bshmScheduleEntity[]> {
    return await this.bshmScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findThirdYearBshrm(): Promise<bshrmScheduleEntity[]> {
    return await this.bshrmScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findThirdYearBsmm(): Promise<bsmmScheduleEntity[]> {
    return await this.bsmmScheduleRepository.find({
      where: { year: 3 },
    });
  }

  async findFourthYearBsa(): Promise<bsaScheduleEntity[]> {
    return await this.bsaScheduleRepository.find({
      where: { year: 4 },
    });
  }

  async findFourthYearBshm(): Promise<bshmScheduleEntity[]> {
    return await this.bshmScheduleRepository.find({
      where: { year: 4 },
    });
  }

  async findFourthYearBshrm(): Promise<bshrmScheduleEntity[]> {
    return await this.bshrmScheduleRepository.find({
      where: { year: 4 },
    });
  }

  async findFourthYearBsmm(): Promise<bsmmScheduleEntity[]> {
    return await this.bsmmScheduleRepository.find({
      where: { year: 4 },
    });
  }

  //^ POST
  async create(createFirstDto: CreateFirstDto): Promise<bsaScheduleEntity> {
    const newSchedule = this.bsaScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bsaScheduleRepository.save(newSchedule);

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
      transferIdBsa: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  //^ Bshm
  async createbshm(
    createFirstDto: CreateFirstDto,
  ): Promise<bshmScheduleEntity> {
    const newSchedule = this.bshmScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bshmScheduleRepository.save(newSchedule);

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
      transferIdBshm: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  async createbshrm(
    createFirstDto: CreateFirstDto,
  ): Promise<bshrmScheduleEntity> {
    const newSchedule = this.bshrmScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bshrmScheduleRepository.save(newSchedule);

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
      transferIdBshrm: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  async createbsmm(
    createFirstDto: CreateFirstDto,
  ): Promise<bsmmScheduleEntity> {
    const newSchedule = this.bsmmScheduleRepository.create({
      ...createFirstDto,
    });

    const savedSchedule = await this.bsmmScheduleRepository.save(newSchedule);

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
      transferIdBsmm: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  //^ PUT
  async update(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bsaScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bsaScheduleRepository.save(existingFirst);

    // Update related TeacherSchedule entities
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

  async updatebshm(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bshmScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bshmScheduleRepository.save(existingFirst);

    // Update related TeacherSchedule entities
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

  async updatebsmm(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bsmmScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bsmmScheduleRepository.save(existingFirst);

    // Update related TeacherSchedule entities
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

  async updatebshrm(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.bshrmScheduleRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.bshrmScheduleRepository.save(existingFirst);

    // Update related TeacherSchedule entities
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
      transferIdBsa: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bsaScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deletebshm(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBshm: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bshmScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deletebshrm(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBshrm: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bshrmScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }

  async deletebsmm(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdBsmm: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.bsmmScheduleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}
