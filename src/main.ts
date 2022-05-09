import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { WinstonModule, utilities as nestWinstonUtilities } from 'nest-winston';
import * as winston from 'winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports:[
        new winston.transports.Console({
          level:process.env.NODE_ENV ==='production' ? 'info':'silly',
          format:winston.format.combine(
            winston.format.timestamp(),
            nestWinstonUtilities.format.nestLike('nest-with-prisma',{prettyPrint: true})
          )
        })
      ]
    })
  });

  app.useGlobalPipes(new ValidationPipe({transform:true}));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
  await app.listen(3333);
}
bootstrap();
