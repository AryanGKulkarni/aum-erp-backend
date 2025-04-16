import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { SeederService } from './seeder/seeder.service';
import * as Joi from 'joi';
import { UserModel } from './models/user.model';
import { SalesModel } from './models/sales.model';
import { PurchaseModel } from './models/purchase.model';
import { SalesController } from './sales/sales.controller';
import { SalesService } from './sales/sales.service';
import { PurchaseService } from './purchase/purchase.service';
import { PurchaseController } from './purchase/purchase.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';

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
        models: [UserModel, SalesModel, PurchaseModel],
        autoLoadModels: true,
        synchronize: false,
      }),
      inject: [ConfigService],
    }),

    SequelizeModule.forFeature([UserModel, SalesModel, PurchaseModel]),
    AuthModule,
  ],
  controllers: [
    AppController,
    SalesController,
    PurchaseController,
    AuthController,
  ],
  providers: [
    AppService,
    SeederService,
    SalesService,
    PurchaseService,
    AuthService,
    UsersService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AppModule {}
