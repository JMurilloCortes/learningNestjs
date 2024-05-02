import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller("/users")

export class UsersController {
  
  constructor(private usersService: UsersService){}
  
  @Get()
  getUsers(){
    return this.usersService.getUsers();
  }
  @Get("/:id")
  getUser(@Param("id") id: string){
    return this.usersService.getUser(parseInt(id));
  }
  @Post()
  createUser(@Body() user: CreateUserDto){
    return this.usersService.createUser(user);
  }
  @Put("/:id")
  updateUser(@Param("id") id: number, @Body() user: UpdateUserDto){
    return this.usersService.updateUser(id, user);
  }
}
