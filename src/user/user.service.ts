import { Injectable } from '@nestjs/common';
import { CreateUserBody } from './dto/create_user.dto';
import { UserRepository } from './user.repository';
import { UserValidator } from './user.validator';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userValidator: UserValidator,
  ){}

  getUsers(){
    const users = this.userRepo.getUsers();
    users.then(v => v.map(vv => {
      vv.id *= 2;
      vv.name = vv.name?.repeat(10);
      return v;
    })).then(v => console.log(v.length))
    return users
  }

  getUser(userId){
    const userRepo = this.userRepo.getUser(this.userValidator.getUserValidator(userId));
    
    return userRepo;
  }

  

  createUser(body: CreateUserBody){
    return this.userRepo.createUser(this.userValidator.createUserValidator(body));
  }
}
