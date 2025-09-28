import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Sequelize } from 'sequelize-typescript';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('AUM-ERP API')
    .setDescription('AUM-ERP Backend APIs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const sequelize = app.get(Sequelize);
  // await sequelize.sync({ force: true });

  await app.listen(5000);
}
bootstrap();
