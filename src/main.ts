import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.useStaticAssets('wallpaper', { prefix: '/wallpaper' });
  app.useStaticAssets('status', { prefix: '/status' });
  // app.useStaticAssets('api', { prefix: '/src' });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
