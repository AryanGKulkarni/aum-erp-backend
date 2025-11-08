import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerModel } from '../models/customer.model';
import { CUSTOMER_DAO } from 'src/constants/dao-tokens';

@Injectable()
export class CustomerService {

  constructor(@Inject(CUSTOMER_DAO) private customerModel: typeof CustomerModel) {}


  create(createCustomerDto: CreateCustomerDto) {
    return this.customerModel.create(createCustomerDto);
  }

  findAll() {
    return this.customerModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
