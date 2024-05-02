import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';

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
  createUser(@Body() user: createUserDto){
    return this.usersService.createUser(user);
  }
}
