import { Injectable } from '@nestjs/common';
import { Client, GatewayIntentBits, REST, Routes, TextChannel } from 'discord.js';
import { commands } from './commands';
import { Roll } from './roll.dto';

@Injectable()
export class AppService {
  async roll(roll:Roll) {
    const dice = roll.dice || 20;
    const channelid = roll.channelid || process.env.CHANNELID || '479199736776228865';
    const user = roll.user || 'unknown';
    const hidden = roll.hidden || false;
    const lang = roll.lang || 'fi';

    const result = Math.floor(Math.random() * dice) + 1;

    const messages = {
      fi: `${user} heitti D${dice} nopalla: ${result}`,
      en: `${user} rolled D${dice} dice with ${result} as result`,
    }
    const message = messages[lang];

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
    client.login(process.env.TOKEN);

    client.on('ready', async () => {
      const channel:TextChannel = await client.channels.fetch(channelid) as TextChannel;
      if(!hidden) {
        console.log('Roll is public. Announcing...');
        
        try {
          await channel.send(message);
          console.log('Announced message:', message);
          
        } catch (error) {
          console.log(error);
          
        }
      }      
    });
    
    return { dice, result };
  }
}
