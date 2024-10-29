import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ExternalService } from './external.service';
import { ExternalController } from './external.controller';
import { TeacherSchedule } from 'src/teachers/entities/teacher_subjects.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HttpModule, // Import HttpModule separately
    TypeOrmModule.forFeature([TeacherSchedule]), // Register TeacherSchedule entity here
  ],
  controllers: [ExternalController],
  providers: [ExternalService],
  exports: [ExternalService, TypeOrmModule],
})
export class ExternalModule {}
