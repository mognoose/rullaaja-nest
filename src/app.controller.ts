import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { roll } from './roll.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('api/roll')
  roll(@Body() roll: roll): Object {
    return this.appService.roll(roll);
  }
}
