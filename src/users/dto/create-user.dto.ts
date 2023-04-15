import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true })
  @MaxLength(10)
  @IsAlphanumeric()
  name: string;
}
