import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { itsubjectsEntity } from './entity/itsubjects.entity';
import { itsubjectstwoEntity } from './entity/itsubjectstwo.entity';
import { itsubjectsthreeEntity } from './entity/itsubjectsthree.entity';
import { itsubjectsfourEntity } from './entity/itsubjectsfour.entity';

@Injectable()
export class itsubjectService {
  constructor(
    @InjectRepository(itsubjectsEntity)
    private subjectsRepository: Repository<itsubjectsEntity>,

    @InjectRepository(itsubjectstwoEntity)
    private subjectsTwoRepository: Repository<itsubjectstwoEntity>,

    @InjectRepository(itsubjectsthreeEntity)
    private subjectsThreeRepository: Repository<itsubjectsthreeEntity>,

    @InjectRepository(itsubjectsfourEntity)
    private subjectsFourRepository: Repository<itsubjectsfourEntity>,
  ) {}

  findAll(): Promise<itsubjectsEntity[]> {
    return this.subjectsRepository.find();
  }

  findAllSecond(): Promise<itsubjectstwoEntity[]> {
    return this.subjectsTwoRepository.find();
  }

  findAllThird(): Promise<itsubjectstwoEntity[]> {
    return this.subjectsThreeRepository.find();
  }

  findAllFourth(): Promise<itsubjectsfourEntity[]> {
    return this.subjectsFourRepository.find();
  }
}
