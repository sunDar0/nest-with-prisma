import { Controller, Get } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('batch')
export class BatchController {
  constructor(private scheduler: SchedulerRegistry){ }
  
  @Get('start')
  startCron()
  {
    const job = this.scheduler.getCronJob('flexibleCronSample');
    job.start();
    console.log('start : ', job.lastDate());

  }

  @Get('stop')
  stopCron()
  {
    const job = this.scheduler.getCronJob('flexibleCronSample');
    job.stop();
    console.log('stopped : ', job.lastDate());
  }
}
