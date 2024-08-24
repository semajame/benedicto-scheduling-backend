import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFourthDto } from './dto/create-first.dto';
import { UpdateFourthDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { Fourth } from './entities/fourth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FourthService {
  constructor(
    @InjectRepository(Fourth)
    private readonly fourthRepository: Repository<Fourth>,
  ) {}

  // async findOneBySubjectCode(
  //   subject_code: string,
  // ): Promise<FirstService | undefined> {
  //   return await this.fourthRepository.findOne({ where: { subject_code } });
  // }

  //^ GET
  async findAll(): Promise<Fourth[]> {
    return await this.fourthRepository.find();
  }

  //^ POST
  async create(createFourthDto: CreateFourthDto): Promise<Fourth> {
    const newSchedule = this.fourthRepository.create({ ...createFourthDto });
    return await this.fourthRepository.save(newSchedule);
  }

  //^ PUT
  async update(id: number, updateFourthDto: UpdateFourthDto): Promise<Fourth> {
    const existingSchedule = await this.fourthRepository.findOneBy({ id });
    if (!existingSchedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    Object.assign(existingSchedule, updateFourthDto);
    return await this.fourthRepository.save(existingSchedule);
  }

  //^ DELETE
  async delete(id: number): Promise<void> {
    const result = await this.fourthRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
  }
}
