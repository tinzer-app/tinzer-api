import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { API_PREFIX } from './constants';
import process from "process";
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix(API_PREFIX);


  await app.listen(80);
}

bootstrap();
