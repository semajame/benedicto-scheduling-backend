import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateThirdDto } from './dto/create-first.dto';
import { UpdateThirdDto } from './dto/update-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { Third } from './entities/third.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ThirdService {
  constructor(
    @InjectRepository(Third)
    private readonly thirdRepository: Repository<Third>,
  ) {}

  // async findOneBySubjectCode(
  //   subject_code: string,
  // ): Promise<FirstService | undefined> {
  //   return await this.firstRepository.findOne({ where: { subject_code } });
  // }

  //^ GET
  async findAll(): Promise<Third[]> {
    return await this.thirdRepository.find();
  }

  //^ POST
  async create(createThirdDto: CreateThirdDto): Promise<Third> {
    const newSchedule = this.thirdRepository.create({ ...createThirdDto });
    return await this.thirdRepository.save(newSchedule);
  }

  //^ PUT
  async update(id: number, updateThirdDto: UpdateThirdDto): Promise<Third> {
    const existingSchedule = await this.thirdRepository.findOneBy({ id });
    if (!existingSchedule) {
      throw new NotFoundException(`Schedule with ID ${id} not found`);
    }

    Object.assign(existingSchedule, updateThirdDto);
    return await this.thirdRepository.save(existingSchedule);
  }

  //^ DELETE
  async delete(id: number): Promise<void> {
    const result = await this.thirdRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
  }
}
