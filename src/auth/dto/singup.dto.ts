// src/auth/dto/signup.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupDto {
  @ApiProperty({ example: 'Aryan A', description: 'Full name of the user' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'aryan@iitindore.ac.in', description: 'Email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'securepassword123', description: 'Password (min 6 characters)' })
  @IsString()
  @MinLength(6)
  password: string;
}
