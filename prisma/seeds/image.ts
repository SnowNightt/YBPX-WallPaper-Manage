import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
const dirs = fs.readdirSync(path.resolve(__dirname, '../../wallpaper'));
console.log(dirs);
export const image = async () => {
  const prisma = new PrismaClient();
  for (let i = 0; i < dirs.length; i++) {
    await prisma.image.create({
      data: {
        fileName: dirs[i],
        description:'123'
      },
    });
  }
};
