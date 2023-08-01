import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Roll } from './roll.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): String {
    return "Rullaaja 3.0";
  }

  @Post('api/roll')
  roll(@Body() roll: Roll): Object {
    return this.appService.roll(roll);
  }
}
