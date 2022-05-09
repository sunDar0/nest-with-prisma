import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, SchedulerRegistry, Timeout } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  constructor(private schedulerRegistry: SchedulerRegistry){
    this.addCronJob();
  }

  addCronJob()
  {
    const name = 'flexibleCronSample';
    const job = new CronJob(`* * * * * *`, () => {
      this.logger.log(`flexible logger!!! ${name}`);
    })

    this.schedulerRegistry.addCronJob(name, job);

    this.logger.log(`job ${name} added!`);

  }

  @Cron(CronExpression.EVERY_10_SECONDS, )
  handleCron()
  {
    this.logger.error('task call!!')
  }
  
  @Timeout('timeoutTask', 5000) // 실행된 뒤 5초 뒤 실행 1회
  timeout()
  {
    this.logger.verbose('timeout !!!')
  }
  @Interval('intervalTask', 3000) // 실행된 뒤 3초 뒤 실행 - 이후 매 3초 마다
  interval()
  {
    this.logger.warn('interval !!!')
  }
}
