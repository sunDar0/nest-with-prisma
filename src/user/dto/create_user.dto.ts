import { User } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserBody
{
  @IsString()
  @IsNotEmpty()
  name: User['name'];

  @IsEmail()
  @IsNotEmpty()
  email: User['email'];
}