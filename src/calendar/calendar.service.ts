import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { CalendarEntity } from './entities/calendar.entity';
import { Repository } from 'typeorm';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
// import { Teacher } from 'src/teachers/entities/teacher.entity';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(CalendarEntity)
    private readonly calendarRepository: Repository<CalendarEntity>,

    // @InjectRepository(Teacher)
    // private teacherRepository: Repository<Teacher>,

    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,
  ) {}

  //^ GET
  async findAll(): Promise<CalendarEntity[]> {
    return await this.calendarRepository.find();
  }

  //^ POST
  async create(createCalendarDto: CreateCalendarDto): Promise<CalendarEntity> {
    const newSchedule = this.calendarRepository.create({
      ...createCalendarDto,
    });
    return await this.calendarRepository.save(newSchedule);
  }

  //^ PUT
  async update(id: number, updateDto: UpdateCalendarDto): Promise<void> {
    // Find the existing First entity along with related TeacherSchedules
    const existingFirst = await this.calendarRepository.findOne({
      where: { id },
    });

    if (!existingFirst) {
      throw new NotFoundException(`First with ID ${id} not found`);
    }

    // Update the existing First entity with the new values
    Object.assign(existingFirst, updateDto);
    await this.calendarRepository.save(existingFirst);

    // Update related TeacherSchedule entities
  }

  //^ DELETE
  async delete(id: number): Promise<void> {
    const result = await this.calendarRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
  }
}
