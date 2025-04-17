import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../models/user.model';
import { generateUserData } from '../factories/user.factory';
import { SalesModel } from '../models/sales.model';
import { generateSalesData } from '../factories/sales.factory';

@Injectable()
export class SeederService {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,
    
    @InjectModel(SalesModel)
    private readonly salesModel: typeof SalesModel,
  ) {}

  async seedUsers(count = 10) {
    const users = Array.from({ length: count }).map(() => generateUserData());
    await this.userModel.bulkCreate(users);
    console.log(`${count} users seeded successfully.`);
  }

  async seedSales(count = 10) {
    const salesData = generateSalesData(count);
    await this.salesModel.bulkCreate(salesData);
    console.log(`${count} fake sales entries inserted`);
  }
}
