import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { SubjectsService } from './subjects.service';
import { itsubjectService } from './itsubjects.service';
import { itsubjectsController } from './itsubjects.controller';

import { itsubjectsEntity } from './entity/itsubjects.entity';
import { itsubjectstwoEntity } from './entity/itsubjectstwo.entity';
import { itsubjectsthreeEntity } from './entity/itsubjectsthree.entity';
import { itsubjectsfourEntity } from './entity/itsubjectsfour.entity';

// import { SubjectsController } from './subjects.controller';
// import { Subject } from './subject.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      itsubjectsEntity,
      itsubjectstwoEntity,
      itsubjectsthreeEntity,
      itsubjectsfourEntity,
    ]),
  ],
  providers: [itsubjectService],
  controllers: [itsubjectsController],
})
export class itsubjectsModule {}
