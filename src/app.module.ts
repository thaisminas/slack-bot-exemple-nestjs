import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SlackBotModule } from '@sikora00/nestjs-slack-bot';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    SlackBotModule.forRoot({
      slackToken: process.env.TOKEN,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
