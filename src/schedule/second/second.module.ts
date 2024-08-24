import { Module } from '@nestjs/common';
import { SecondService } from './second.service';
import { SecondController } from './second.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Second } from '../second/entities/second.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Second])],
  controllers: [SecondController],
  providers: [SecondService],
  exports: [SecondService],
})
export class SecondModule {}
