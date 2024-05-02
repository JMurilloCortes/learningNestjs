import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
  createUser(user: CreateUserDto){
    console.log(user);
    this.users.push({
      ...user,
      id: this.users.length + 1,
    })    
    return user
  }
  updateUser(id: number, user: UpdateUserDto){
    const userIndex = this.users.findIndex(user => user.id === id);
    console.log(userIndex);
    

    if(userIndex === -1){
      throw new NotFoundException(`El usuario con id ${id} no fue encontrado`);
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...user,
    };

    this.users[userIndex] = updatedUser;
    return updatedUser;
}


}
