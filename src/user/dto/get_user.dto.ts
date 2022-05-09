import { User } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class GetUserParam
{
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value, 10))
  userId: User['id'];
}