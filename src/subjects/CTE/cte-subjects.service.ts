import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { bsedSubjectsEntity } from 'src/typeorm';
import { beedSubjectsEntity } from './entity/beed-subjects.entity';

@Injectable()
export class cteSubjectsService {
  constructor(
    @InjectRepository(bsedSubjectsEntity)
    private subjectsBsedRepository: Repository<bsedSubjectsEntity>,

    @InjectRepository(beedSubjectsEntity)
    private subjectsBeedRepository: Repository<beedSubjectsEntity>,
  ) {}

  findAllBsed(): Promise<bsedSubjectsEntity[]> {
    return this.subjectsBsedRepository.find();
  }

  findAllBeed(): Promise<beedSubjectsEntity[]> {
    return this.subjectsBeedRepository.find();
  }
}
