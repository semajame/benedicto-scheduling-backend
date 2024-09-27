import { IsString, IsOptional } from 'class-validator';

export class CreateCalendarDto {
  @IsString()
  subject: string;

  @IsString()
  location: string;

  @IsString()
  start: string;

  @IsString()
  end: string;

  @IsString()
  @IsOptional()
  background?: string;
}
