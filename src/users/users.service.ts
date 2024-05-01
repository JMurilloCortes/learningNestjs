import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users=[
    {
      id: 1,
      name: "Jerry Murillo",
      phone: "3206426939",
    },
    {
      id: 2,
      name: "Fe Nagles",
      phone: "3207127790",
    },
  ]
  getUsers(){
    return this.users
  }
}
