import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeederService } from '../seeder/seeder.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.get(SeederService);
  await seeder.seedForms(10);
  await app.close();
}
bootstrap();