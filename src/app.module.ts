import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule } from './auth/auth.module';
import { CONTROLLERS, MODELS, SERVICES } from './app.providers';
import { EnquiryModule } from './enquiry/enquiry.module';
import { DAO_PROVIDERS } from './database/dao-providers';
import { CustomerModule } from './customer/customer.module';
import { DaoModule } from './database/dao.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().default(5432),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRES_IN: Joi.string().required(),
      }),
    }),

    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        models: MODELS,
        autoLoadModels: true,
        synchronize: false,
      }),
      inject: [ConfigService],
    }),

    SequelizeModule.forFeature(MODELS),
    DaoModule,
    AuthModule,
    EnquiryModule,
    CustomerModule,
  ],
  controllers: CONTROLLERS,
  providers: [...SERVICES, ...DAO_PROVIDERS],
})
export class AppModule {}
