import { PartialType } from '@nestjs/mapped-types';
import { CreateSecondDto } from './create-first.dto';
import { IsString, IsInt, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateSecondDto extends PartialType(CreateSecondDto) {
  @IsString()
  @IsNotEmpty()
  subject_code: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsInt()
  @IsNotEmpty()
  units: number;

  @IsString()
  @IsNotEmpty()
  room: string;

  @IsString()
  @IsNotEmpty()
  teacher: string;

  @IsString()
  @IsNotEmpty()
  start: string;

  @IsString()
  @IsNotEmpty()
  end: string;

  @IsString()
  @IsNotEmpty()
  day: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  recurrencePattern: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  background: string;
}
