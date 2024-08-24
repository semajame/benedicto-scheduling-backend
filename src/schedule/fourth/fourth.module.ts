import { Module } from '@nestjs/common';
import { FourthService } from './fourth.service';
import { FourthController } from './fourth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fourth } from '../fourth/entities/fourth.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fourth])],
  controllers: [FourthController],
  providers: [FourthService],
  exports: [FourthService],
})
export class FourthModule {}
