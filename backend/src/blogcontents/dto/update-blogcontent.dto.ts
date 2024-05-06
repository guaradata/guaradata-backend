import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogcontentDto } from './create-blogcontent.dto';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsDateString,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

export class UpdateBlogcontentDto extends PartialType(CreateBlogcontentDto) {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(300)
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly author: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly content: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @IsDateString()
  readonly publicationDate: Date;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @IsDateString()
  readonly updatedAt: Date;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly category: string;

  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  readonly keywords: [string];

  @IsString()
  @MinLength(2)
  readonly coverImage: string;

  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  readonly tags: [string];

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  readonly language: string;
}
