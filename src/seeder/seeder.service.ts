import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../models/user.model';
import { generateUserData } from '../factories/user.factory';

@Injectable()
export class SeederService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async seedUsers(count = 10) {
    const users = Array.from({ length: count }).map(() => generateUserData());
    await this.userModel.bulkCreate(users);
    console.log(`${count} users seeded successfully.`);
  }
}
