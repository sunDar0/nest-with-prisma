import { Injectable } from '@nestjs/common';
import { CreateUserBody } from './dto/create_user.dto';
import { GetUserParam } from './dto/get_user.dto';
import { UserRepository } from './user.repository';
import { UserValidator } from './user.validator';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userValidator: UserValidator,
  ){}

  getUsers(){
    return this.userRepo.getUsers();
  }

  getUser(param: GetUserParam){
    return this.userRepo.getUser(this.userValidator.getUserValidator(param));
  }

  

  createUser(body: CreateUserBody){
    return this.userRepo.createUser(this.userValidator.createUserValidator(body));
  }
}
