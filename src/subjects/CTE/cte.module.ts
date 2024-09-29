import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { SubjectsService } from './subjects.service';
import { cteSubjectsService } from './cte.service';
import { cteSubjectsController } from './cte.controller';

import { bsedSubjectsEntity } from 'src/typeorm';
import { beedSubjectsEntity } from 'src/typeorm';
// import { SubjectsController } from './subjects.controller';
// import { Subject } from './subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([bsedSubjectsEntity, beedSubjectsEntity])],
  providers: [cteSubjectsService],
  controllers: [cteSubjectsController],
})
export class cteSubjectsModule {}
