import { Module } from '@nestjs/common';
import { ThirdService } from './third.service';
import { ThirdController } from './third.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Third } from '../third/entities/third.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Third])],
  controllers: [ThirdController],
  providers: [ThirdService],
  exports: [ThirdService],
})
export class ThirdModule {}
