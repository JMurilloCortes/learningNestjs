import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()

export class UsersService {

  constructor(private prisma: PrismaService){}

  getUsers(){
    return this.prisma.usuario.findMany();
  }

  // getUser(id: string){
  //   return this.prisma.usuario.findUnique(id);
  // }
  
  createUser(user: CreateUserDto){
    return this.prisma.usuario.create({data:user})
  }

  updateUser(id: string, user: UpdateUserDto) {
    return this.prisma.usuario.update({
      where: { id }, // Proporciona la condición para seleccionar el usuario por su ID
      data: user,   // Proporciona los datos para actualizar
    });
  }

}