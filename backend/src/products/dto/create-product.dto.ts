import { IsString, IsNumber, IsUrl, IsObject, Min, IsNotEmpty, IsOptional } from 'class-validator';

class RatingDto {
  @IsNumber()
  @Min(0)
  rate: number;

  @IsNumber()
  @Min(0)
  count: number;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsUrl()
  image: string;

  @IsOptional()
  @IsObject()
  rating: RatingDto;
}