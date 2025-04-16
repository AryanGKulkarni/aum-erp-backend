import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDateString,
  IsOptional,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreatePurchaseDto {
  @ApiProperty()
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsString()
  month: string;

  @ApiProperty()
  @IsString()
  invoiceNo: string;

  @ApiProperty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsString()
  partyName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  hsnSac?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gstin?: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  quantity?: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rate?: number;

  // Booleans for tax logic only (not saved in DB)
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isCGST14?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isSGST14?: boolean;
  
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isCGST9?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isSGST9?: boolean;
  
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isCGST6?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isSGST6?: boolean;
  
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isCGST2_5?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isSGST2_5?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isIGST18?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isIGST28?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isUTGST?: boolean;
}
