import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  imageList(): string {
    return 'Hello World!';
  }
}
