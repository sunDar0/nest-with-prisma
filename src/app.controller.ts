import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    // private db: 
  ) {}

  @Get()
  @HealthCheck()
  getHello() {
    const healthcheck = this.health.check([() => this.http.pingCheck('naver', 'https://naver.com')])
    
    return healthcheck;
  }
}
