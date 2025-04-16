import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../models/user.model';
import { UsersService } from '../users/users.service';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel]),
    PassportModule,
    JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
            secret: config.get<string>('JWT_SECRET'),
            signOptions: {
                expiresIn: config.get<string>('JWT_EXPIRES_IN'),
            },
        }),
    }),
  ],
  providers: [AuthService, UsersService, LocalStrategy],
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
