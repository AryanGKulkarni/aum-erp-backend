import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerModel } from '../models/customer.model';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
