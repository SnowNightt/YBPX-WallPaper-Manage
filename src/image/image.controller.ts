import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private image: ImageService) {}
  @Get('imagelist')
  getImageList(@Query('page') page: number): any {
    return this.image.imageList(page);
  }
  @Post('search')
  searchImages(@Body() keyWords: { keyWords: string,page:number }): any {
    return this.image.searchImages(keyWords);
  }
}
