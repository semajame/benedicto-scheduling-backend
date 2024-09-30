import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { itSubjectsEntity } from './entity/ccs-subjects.entity';

@Injectable()
export class itsubjectService {
  constructor(
    @InjectRepository(itSubjectsEntity)
    private subjectsRepository: Repository<itSubjectsEntity>,
  ) {}

  findAll(): Promise<itSubjectsEntity[]> {
    return this.subjectsRepository.find();
  }
}
