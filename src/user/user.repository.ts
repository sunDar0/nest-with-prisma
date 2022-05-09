import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { UserValidator } from "./user.validator";

@Injectable()
export class UserRepository
{
  constructor(private readonly prismaService: PrismaService)
  {

  }

  async getUsers()
  {
    return await this.prismaService.user.findMany();
  }

  async getUser(userFindUniqueArgs: ReturnType<UserValidator['getUserValidator']>)
  {
    
    return await this.prismaService.user.findUnique(userFindUniqueArgs);
  }

  async createUser(userCreateInput: ReturnType<UserValidator['createUserValidator']>)
  {
    return await this.prismaService.user.create(userCreateInput);
  }

}