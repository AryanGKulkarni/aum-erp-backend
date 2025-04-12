import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'postgres', // matches docker service name
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'aum-erp',
      autoLoadModels: true,
      synchronize: true, // disable in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
