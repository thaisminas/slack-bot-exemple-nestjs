import { CallHandler, Injectable } from '@nestjs/common';
import {
  ISlackInterceptor,
  SlackInterceptor,
  SlackMessage,
} from '@sikora00/nestjs-slack-bot';
import { map, Observable } from 'rxjs';

@SlackInterceptor()
@Injectable()
export class HelloInterceptor implements ISlackInterceptor {
  intercept(
    message: SlackMessage,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((res) => {
        if (res) {
          return `Hello Maciej\n${res}`;
        }
      }),
    );
  }
}