import { Body, Controller, Get, Inject, Logger, LoggerService, Param, Patch, Post } from '@nestjs/common';
import { CreateUserBody } from './dto/create_user.dto';
import { UserService } from './user.service';
import { ValidationPipe } from '../pipe/validation.pipe';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(Logger) private readonly logger:LoggerService
  )
  { }

  @Get()
  getUsers()
  {
    return this.userService.getUsers();
  }

  @Get(':userId')
  getUser(@Param('userId', ValidationPipe) userId: number) 
  {
    return this.userService.getUser(userId);
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
