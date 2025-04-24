/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Exclude } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  @Exclude()
  @IsEmail()
  email: string;
  @IsString()
  @Exclude()
  password: string;
}
