import { Controller, Get } from '@nestjs/common';
import { itsubjectService } from './ccs-subjects.service';

import { itSubjectsEntity } from './entity/ccs-subjects.entity';

@Controller('subjects')
export class itsubjectsController {
  constructor(private readonly subjectsService: itsubjectService) {}

  @Get('bachelor-of-information-technology')
  get(): Promise<itSubjectsEntity[]> {
    return this.subjectsService.findAll();
  }
}
