import { PartialType } from '@nestjs/mapped-types';
import { CreateFirstDto } from './create-first.dto';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateFirstDto extends PartialType(CreateFirstDto) {
  @IsString()
  @IsOptional()
  subject_code?: string;

  @IsString()
  @IsOptional()
  subject?: string;

  @IsInt()
  @IsOptional()
  units?: number;

  @IsString()
  @IsOptional()
  year?: number;

  @IsString()
  @IsOptional()
  room?: string;

  @IsString()
  @IsOptional()
  teacher?: string;

  @IsString()
  @IsOptional()
  start?: string;

  @IsString()
  @IsOptional()
  end?: string;

  @IsString()
  @IsOptional()
  day?: string;

  @IsString()
  @IsOptional()
  recurrencePattern?: string;

  @IsString()
  @IsOptional()
  background?: string;
}
