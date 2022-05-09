import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { CreateUserBody } from './dto/create_user.dto';

@Injectable()
export class UserValidator
{
  createUserValidator({email, name}: CreateUserBody)
  {
    return Prisma.validator<Prisma.UserCreateArgs>()({
      data:{
        email,
        name
      }
    });
  }

  getUserValidator(userId){
    return Prisma.validator<Prisma.UserFindUniqueArgs>()({
      rejectOnNotFound: true,
      where: {
        id: userId
      }
    })
  }
}