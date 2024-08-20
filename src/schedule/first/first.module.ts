import { Module } from '@nestjs/common';
import { FirstService } from './first.service';
import { FirstController } from './first.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { First } from '../first/entities/first.entity';

@Module({
  imports: [TypeOrmModule.forFeature([First])],
  controllers: [FirstController],
  providers: [FirstService],
  exports: [FirstService],
})
export class FirstModule {}
