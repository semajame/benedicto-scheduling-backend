import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherSchedule } from './entities/teacher_subjects.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(TeacherSchedule)
    private teacherScheduleRepository: Repository<TeacherSchedule>,

    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async getTeacherScheduleById(id: number): Promise<TeacherSchedule> {
    const schedule = await this.teacherScheduleRepository.findOne({
      where: { id },
      relations: ['teacher'],
    });
    if (!schedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }
    return schedule;
  }

  async getAllSchedules(): Promise<TeacherSchedule[]> {
    return this.teacherScheduleRepository.find({ relations: ['teacher'] });
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherRepository.find();
  }

  async findOne(id: number): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOneBy({ id });
    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }
    return teacher;
  }

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const existingTeacher = await this.teacherRepository.findOneBy({
      firstName: createTeacherDto.firstName,
      lastName: createTeacherDto.lastName,
    });

    if (existingTeacher) {
      throw new ConflictException('Teacher already exists');
    }

    const newTeacher = this.teacherRepository.create({
      ...createTeacherDto,
    });
    return this.teacherRepository.save(newTeacher);
  }

  async update(
    id: number,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    // Find the teacher by ID
    const teacher = await this.teacherRepository.findOneBy({ id });
    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }

    // Check for conflict with other teachers (excluding the current teacher)
    const existingTeacher = await this.teacherRepository.findOneBy({
      firstName: updateTeacherDto.firstName,
      lastName: updateTeacherDto.lastName,
      id: Not(id), // Ensure this teacher's ID is excluded from the check
    });

    if (existingTeacher) {
      throw new ConflictException(
        'Another teacher with the same name already exists',
      );
    }

    // Apply the updates to the teacher object
    Object.assign(teacher, updateTeacherDto);

    // Save the updated teacher
    return this.teacherRepository.save(teacher);
  }

  async remove(id: number): Promise<void> {
    const teacher = await this.teacherRepository.findOneBy({ id });
    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }
    await this.teacherRepository.remove(teacher);
  }
}
