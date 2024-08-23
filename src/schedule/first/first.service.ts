import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { First } from './entities/first.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FirstService {
  constructor(
    @InjectRepository(First)
    private readonly firstRepository: Repository<First>,
  ) {}

  // async findOneBySubjectCode(
  //   subject_code: string,
  // ): Promise<FirstService | undefined> {
  //   return await this.firstRepository.findOne({ where: { subject_code } });
  // }

  // GET
  async findAll(): Promise<First[]> {
    return await this.firstRepository.find();
  }

  // POST
  async create(createFirstDto: CreateFirstDto): Promise<First> {
    const newSchedule = this.firstRepository.create({ ...createFirstDto });
    return await this.firstRepository.save(newSchedule);
  }

  // PUT
  async update(id: number, updateFirstDto: UpdateFirstDto): Promise<First> {
    const existingSchedule = await this.firstRepository.findOneBy({ id });
    if (!existingSchedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    Object.assign(existingSchedule, updateFirstDto);
    return await this.firstRepository.save(existingSchedule);
  }

  // DELETE
  async delete(id: number): Promise<void> {
    const result = await this.firstRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
  }
}
