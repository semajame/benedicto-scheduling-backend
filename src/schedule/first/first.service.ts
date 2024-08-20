import { Injectable } from '@nestjs/common';
import { CreateFirstDto } from './dto/create-first.dto';

import { InjectRepository } from '@nestjs/typeorm';

import { First } from './entities/first.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FirstService {
  constructor(
    @InjectRepository(First)
    private readonly firstRepository: Repository<First>,
  ) {}

  async findAll(): Promise<First[]> {
    return await this.firstRepository.find();
  }

  // async findOneBySubjectCode(
  //   subject_code: string,
  // ): Promise<FirstService | undefined> {
  //   return await this.firstRepository.findOne({ where: { subject_code } });
  // }

  async create(createFirstDto: CreateFirstDto): Promise<First> {
    const newSchedule = this.firstRepository.create({ ...createFirstDto });
    return await this.firstRepository.save(newSchedule);
  }
}
