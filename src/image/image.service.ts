import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}
  async imageList(page = 1) {
    const rows = 9;
    const imgList = await this.prisma.image.findMany({
      skip: (page - 1) * rows,
      take: rows,
    });
    const total = await this.prisma.image.count();
    return {
      meta: {
        current_page: page,
        total,
        total_page: Math.ceil(total / rows),
      },
      data: imgList,
    };
  }

  async searchImages(key: { keyWords: string; page: number }) {
    const rows = 9;
    const res = await this.prisma.image.findMany({
      where: {
        // 查询描述中包含keyWords的记录
        description: {
          contains: key.keyWords,
        },
      },
      skip: (key.page - 1) * rows,
      take: rows,
    });
    const total = await this.prisma.image.count({
      where: {
        description: {
          contains: key.keyWords,
        },
      },
    });
    return {
      meta: {
        keyWords: key.keyWords,
        current_page: key.page,
        total,
        total_page: Math.ceil(total / rows),
      },
      data: res,
    };
  }
}
