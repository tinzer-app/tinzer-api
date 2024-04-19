import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { API_PREFIX } from './constants';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix(API_PREFIX);

  const config = new DocumentBuilder()
    .setTitle('Tinzer API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(80);
}

bootstrap();
