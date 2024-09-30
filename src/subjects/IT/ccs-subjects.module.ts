import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { SubjectsService } from './subjects.service';
import { itsubjectService } from './ccs-subjects.service';
import { itsubjectsController } from './ccs-subjects.controller';

import { itSubjectsEntity } from './entity/ccs-subjects.entity';

// import { SubjectsController } from './subjects.controller';
// import { Subject } from './subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([itSubjectsEntity])],
  providers: [itsubjectService],
  controllers: [itsubjectsController],
})
export class itsubjectsModule {}
