import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { CcsScheduleEntitiy } from './entities/ccs-schedule.entity';

import { In, Repository } from 'typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Injectable()
export class CcsService {
  constructor(
    @InjectRepository(CcsScheduleEntitiy)
    private readonly CcsRepository: Repository<CcsScheduleEntitiy>,

    // @InjectRepository(Teacher)
    // private teacherRepository: Repository<Teacher>,

    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,
  ) {}

  // async findOneBySubjectCode(
  //   subject_code: string,
  // ): Promise<FirstService | undefined> {
  //   return await this.firstRepository.findOne({ where: { subject_code } });
  // }

  //^ GET TEACHER SCHEDULE BY TEACHER NAME
  async getTeacherSchedulesByTeacherName(
    teacher: string,
  ): Promise<TeacherSchedule[]> {
    return await this.teacherScheduleRepository.find({
      where: { teacher: teacher },
    });
  }

  //^ GET TECHNO FOR COE
  async findTechnoForCoe(): Promise<CcsScheduleEntitiy[]> {
    return await this.CcsRepository.find({
      where: {
        subject: In(['Technopreneurship (Lab)', 'Technopreneurship (Lec)']),
      },
    });
  }

  //^ GET

  async findAll(): Promise<CcsScheduleEntitiy[]> {
    return await this.CcsRepository.find();
  }

  async findFirstYear(): Promise<CcsScheduleEntitiy[]> {
    return await this.CcsRepository.find({
      where: { year: 1 },
    });
  }

  async findSecondYear(): Promise<CcsScheduleEntitiy[]> {
    return await this.CcsRepository.find({
      where: { year: 2 },
    });
  }

  async findThirdYear(): Promise<CcsScheduleEntitiy[]> {
    return await this.CcsRepository.find({
      where: { year: 3 },
    });
  }

  async findFourthYear(): Promise<CcsScheduleEntitiy[]> {
    return await this.CcsRepository.find({
      where: { year: 4 },
    });
  }

  //^ POST
  async create(createFirstDto: CreateFirstDto): Promise<CcsScheduleEntitiy> {
    // Create and save the new CcsSchedule entity
    const newSchedule = this.CcsRepository.create({ ...createFirstDto });
    const savedSchedule = await this.CcsRepository.save(newSchedule);

    // Create a corresponding TeacherSchedule entity
    const newTeacherSchedule = this.teacherScheduleRepository.create({
      teacher: createFirstDto.teacher, // Use teacher's name from createFirstDto
      subject_code: createFirstDto.subject_code,
      subject: createFirstDto.subject,
      units: createFirstDto.units,
      room: createFirstDto.room,
      start: createFirstDto.start,
      end: createFirstDto.end,
      day: createFirstDto.day,
      transferIdCcs: savedSchedule.id, // Link with saved CcsSchedule
    });

    // Save the TeacherSchedule entity
    await this.teacherScheduleRepository.save(newTeacherSchedule);

    return savedSchedule; // Return the newly created CcsSchedule
  }

  //^ PUT
  async update(id: number, updateDto: UpdateFirstDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.CcsRepository.findOne({
      where: { id },
      relations: ['teacherSchedules'], // Ensure we load related TeacherSchedules
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.CcsRepository.save(existingFirst);

    // Update related TeacherSchedule entities
    if (
      existingFirst.teacherSchedules &&
      existingFirst.teacherSchedules.length > 0
    ) {
      for (const teacherSchedule of existingFirst.teacherSchedules) {
        // Update the related TeacherSchedule fields
        teacherSchedule.subject_code = existingFirst.subject_code;
        teacherSchedule.subject = existingFirst.subject;
        teacherSchedule.units = existingFirst.units;
        teacherSchedule.room = existingFirst.room;
        teacherSchedule.start = existingFirst.start;
        teacherSchedule.end = existingFirst.end;
        teacherSchedule.day = existingFirst.day;

        // Save updated TeacherSchedule entity
        await this.teacherScheduleRepository.save(teacherSchedule);
      }
    }
  }

  //^ DELETE
  async delete(id: number): Promise<void> {
    // First, delete related TeacherSchedule entries
    const deleteRelatedResult = await this.teacherScheduleRepository.delete({
      transferIdCcs: id, // Ensure you use the correct column to match related schedules
    });

    if (deleteRelatedResult.affected === 0) {
      console.warn(`No related teacher schedules found for schedule ID ${id}`);
    }

    // Now delete the First schedule
    const result = await this.CcsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}
