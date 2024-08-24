import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSecondDto } from './dto/create-first.dto';
import { UpdateSecondDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { Second } from './entities/second.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SecondService {
  constructor(
    @InjectRepository(Second)
    private readonly secondRepository: Repository<Second>,
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
  async delete(id: number): Promise<void> {
    const result = await this.secondRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
  }
}
