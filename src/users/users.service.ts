import { Injectable, NotFoundException } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';

@Injectable()

export class UsersService {

  private users = []

  getUsers(){
    return this.users
  }
  getUser(id: number){
    const userFound = this.users.find(user => user.id === id)
    if(!userFound){
      return new NotFoundException(`El usuario con id ${id} no fue encontrado`)
    } return userFound
  }
  createUser(user: createUserDto){
    console.log(user);
    this.users.push({
      ...user,
      id: this.users.length + 1,
    })    
    return user
  }
}
