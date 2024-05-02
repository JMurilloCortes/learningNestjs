import { IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";

export class CreateTaskDto {
  
  @IsString()
  @IsNotEmpty()
  buy: string
  
  @IsNumber()
  @IsNotEmpty()
  quantity: number
  
}