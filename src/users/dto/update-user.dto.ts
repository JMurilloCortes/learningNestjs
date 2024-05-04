import { IsNumber, IsString, MinLength } from "class-validator"


export class UpdateUserDto {

  @IsString()
  @MinLength(1)
  email: string
  
  @IsString()
  @MinLength(1)
  name: string
  
  @IsString()
  password: string

}