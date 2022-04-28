import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserBody } from './dto/create_user.dto';
import { GetUserParam } from './dto/get_user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService)
  {

  }

  @Get()
  getUsers()
  {
    return this.userService.getUsers();
  }

  @Get(':userId')
  getUser(@Param() param:GetUserParam) 
  {
    console.log(param);
    return this.userService.getUser(param);
  }

  @Post()
  createUser(@Body() body: CreateUserBody)
  {
    return this.userService.createUser(body);
  }

  @Patch(':userId')
  updateUser()
  {

  }
}
