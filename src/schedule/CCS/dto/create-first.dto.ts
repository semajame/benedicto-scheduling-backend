import { IsString, IsInt, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateFirstDto {
  @IsString()
  @IsNotEmpty()
  subject_code: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  subject_id: number;

  @IsString()
  @IsNotEmpty()
  teacher_id: number;

  @IsString()
  @IsNotEmpty()
  teacher: string;

  @IsInt()
  @IsNotEmpty()
  units: number;

  @IsString()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  room: string;

  @IsString()
  @IsNotEmpty()
  start: string;

  @IsString()
  @IsNotEmpty()
  end: string;

  @IsString()
  @IsNotEmpty()
  day: string;

  @IsInt()
  @IsNotEmpty()
  semester_id: number;

  @IsString()
  @IsNotEmpty()
  semester: string;

  @IsString()
  @IsNotEmpty()
  school_year: string;

  @IsString()
  @IsOptional()
  recurrencePattern?: string;

  @IsString()
  @IsOptional()
  background?: string;
}
