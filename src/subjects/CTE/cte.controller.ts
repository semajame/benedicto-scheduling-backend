import { Controller, Get } from '@nestjs/common';
import { cteSubjectsService } from './cte.service';
import { beedSubjectsEntity } from 'src/typeorm';
import { bsedSubjectsEntity } from 'src/typeorm';

@Controller('subjects')
export class cteSubjectsController {
  constructor(private readonly subjectsService: cteSubjectsService) {}

  @Get('bachelor-of-secondary-education')
  getbsedSubjects(): Promise<bsedSubjectsEntity[]> {
    return this.subjectsService.findAllBsed();
  }

  @Get('bachelor-of-elementary-education')
  getbeedSubjects(): Promise<beedSubjectsEntity[]> {
    return this.subjectsService.findAllBeed();
  }
}
