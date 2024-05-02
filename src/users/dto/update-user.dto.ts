import { IsNumber, IsString, MinLength } from "class-validator"


export class UpdateUserDto {
  @IsString()
  @MinLength(1)
  name: string
  
  @IsNumber()
  age: number
  
  @IsString()
  @MinLength(1)
  mail: string
}