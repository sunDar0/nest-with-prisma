import { Logger, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserValidator } from './user.validator';

@Module({
  providers: [UserService, UserRepository, UserValidator, Logger],
  controllers: [UserController]
})
export class UserModule {}
