import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './create-teacher.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TeacherSchedule } from 'src/typeorm';

export class UpdateTeacherDto extends PartialType(TeacherSchedule) {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}
