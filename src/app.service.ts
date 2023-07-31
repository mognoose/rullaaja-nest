import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  roll(props): Object {
    const dice = props.dice || 20;
    
    return {
      dice: dice,
      result: Math.floor(Math.random() * dice) + 1
    };
  }
}
