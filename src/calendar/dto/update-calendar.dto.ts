import { PartialType } from '@nestjs/mapped-types';
import { CreateCalendarDto } from './create-calendar.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCalendarDto extends PartialType(CreateCalendarDto) {
  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  start: string;

  @IsString()
  @IsNotEmpty()
  end: string;

  @IsString()
  @IsOptional()
  background?: string;
}
