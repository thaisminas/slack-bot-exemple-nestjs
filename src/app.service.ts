import { Injectable } from '@nestjs/common';
import { SlackCommandHandler, SlackMessage } from '@sikora00/nestjs-slack-bot';

@SlackCommandHandler()
@Injectable()
export class AppService {
  description = 'say hello to the Slack Bot';
  type = 'oi';

  async handler(command: string[], message: SlackMessage): Promise<any> {
    return `Olá seja bem vindo ao canal!!! :smile:`;
  }
}
