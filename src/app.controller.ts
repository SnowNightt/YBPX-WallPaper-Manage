import { Controller, Get, Res } from '@nestjs/common';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';
import { Response } from 'express';
@Controller()
export class AppController {
  @Get()
  getHello(): any {
    // 获取图片名数组
    const file = readdirSync(resolve(__dirname, '../../wallpaper'));
    return 'http://localhost:3000/wallpaper/' + file[_.random(file.length - 1)];
  }
  @Get('loading')
  getLoading(@Res() res: Response) {
    const file = readFileSync(
      resolve(__dirname, '../../status', 'loading.gif'),
    );
    res.type('image/jpeg');
    return res.send(file);
  }
  @Get('error')
  getError(@Res() res: Response) {
    const file = readFileSync(resolve(__dirname, '../../status', 'error.gif'));
    res.type('image/jpeg');
    return res.send(file);
  }
}
