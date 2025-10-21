import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MODELS } from './app.providers';

async function syncDB() {
  const appContext = await NestFactory.createApplicationContext(AppModule, {
    logger: false,
  });
  const configService = appContext.get(ConfigService);

  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: parseInt(configService.get<string>('DB_PORT')),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    models: MODELS,
  });
  
  const option = process.argv[2]; // read "force" or "alter" from CLI
  try {
    if (option === 'force') {
      await sequelize.sync({ force: true });
      console.log('Database synced with FORCE (all tables dropped & recreated)');
    } else if (option === 'alter') {
      await sequelize.sync({ alter: true });
      console.log('Database synced with ALTER (tables updated)');
    } else {
      await sequelize.sync();
      console.log('Database synced without destructive changes');
    }
  } catch (err) {
    console.error('Error syncing database:', err);
  } finally {
    await sequelize.close();
  }
}

syncDB();
