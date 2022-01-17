import { Controller, Get, Post } from '@nestjs/common';
import { SlackMessage } from '@sikora00/nestjs-slack-bot';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(text: SlackMessage, command: []) {
    return this.appService.handler(command, text);
  }
}
