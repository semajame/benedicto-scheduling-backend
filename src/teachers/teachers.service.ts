import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

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
    updateTeacherDto: CreateTeacherDto,
  ): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOneBy({ id });
    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }

    const existingTeacher = await this.teacherRepository.findOneBy({
      firstName: updateTeacherDto.firstName,
      lastName: updateTeacherDto.lastName,
      id: id, // Exclude current teacher
    });

    if (existingTeacher) {
      throw new ConflictException(
        'Another teacher with the same name already exists',
      );
    }

    Object.assign(teacher, updateTeacherDto);
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
