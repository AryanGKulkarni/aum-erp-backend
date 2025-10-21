// src/app.providers.ts
import { UserModel } from './models/user.model';
import { SalesModel } from './models/sales.model';
import { PurchaseModel } from './models/purchase.model';

import { AppService } from './app.service';
import { SeederService } from './seeder/seeder.service';
import { SalesService } from './sales/sales.service';
import { PurchaseService } from './purchase/purchase.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { JwtService } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { SalesController } from './sales/sales.controller';
import { PurchaseController } from './purchase/purchase.controller';
import { AuthController } from './auth/auth.controller';
import { CustomerModel } from './models/customer.model';
import { EnquiryModel } from './models/enquiries.model';
import { EnquiryAttachmentModel } from './models/enquiryAttachment.model';
import { FeasibilityStudyModel } from './models/feasibilityStudy.model';
import { QuotationModel } from './models/quotation.model';


export const MODELS = [
  UserModel,
  SalesModel,
  PurchaseModel,
  CustomerModel,
  EnquiryAttachmentModel,
  EnquiryModel,
  FeasibilityStudyModel,
  QuotationModel,
];


export const SERVICES = [
  AppService,
  SeederService,
  SalesService,
  PurchaseService,
  AuthService,
  UsersService,
  LocalStrategy,
  JwtStrategy,
  JwtService,
];


export const CONTROLLERS = [
  AppController,
  SalesController,
  PurchaseController,
  AuthController,
];
