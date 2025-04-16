import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../models/user.model';
import { generateUserData } from '../factories/user.factory';

@Injectable()
export class SeederService {
  constructor(
    @InjectModel(UserModel)
    private readonly userModel: typeof UserModel,
  ) {}

  async seedUsers(count = 10) {
    const users = Array.from({ length: count }).map(() => generateUserData());
    await this.userModel.bulkCreate(users);
    console.log(`${count} users seeded successfully.`);
  }
}
