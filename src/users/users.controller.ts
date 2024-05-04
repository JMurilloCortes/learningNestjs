import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  // @Get("/:id")
  // getUser(@Param("id") id: string){
  //   return this.usersService.getUser(parseInt(id));
  // }

  @Post()
  createUser(@Body() user: CreateUserDto){
    return this.usersService.createUser(user);
    
  }
  @Put("/:id")
  async updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    // Convierte el ID de string a número
    const userId = (id);

    // Llama al método updateUser del servicio UsersService
    return this.usersService.updateUser(userId, updateUserDto);
  }

  @Delete("/:id")
  deleteUser(@Param("id") id: string){
  }
}
