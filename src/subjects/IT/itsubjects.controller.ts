import { Controller, Get } from '@nestjs/common';
import { itsubjectService } from './itsubjects.service';

import { itsubjectsEntity } from './entity/itsubjects.entity';
import { itsubjectstwoEntity } from './entity/itsubjectstwo.entity';
import { itsubjectsthreeEntity } from './entity/itsubjectsthree.entity';
import { itsubjectsfourEntity } from './entity/itsubjectsfour.entity';

@Controller('subjects')
export class itsubjectsController {
  constructor(private readonly subjectsService: itsubjectService) {}

  @Get('1st-year')
  get(): Promise<itsubjectsEntity[]> {
    return this.subjectsService.findAll();
  }

  @Get('2nd-year')
  getSecondALl(): Promise<itsubjectstwoEntity[]> {
    return this.subjectsService.findAllSecond();
  }

  @Get('3rd-year')
  getThirdAll(): Promise<itsubjectsthreeEntity[]> {
    return this.subjectsService.findAllThird();
  }

  @Get('4th-year')
  getFourthAll(): Promise<itsubjectsfourEntity[]> {
    return this.subjectsService.findAllFourth();
  }
}
