import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  
  constructor(){
    super({
      log: [
        {emit: 'stdout', level: 'query'},
        {emit: 'stdout', level: 'error'},
      ]
    })
  }

  onModuleDestroy() {
    this.$connect();
  }

  onModuleInit() {
    this.$disconnect();
  }

  
}
