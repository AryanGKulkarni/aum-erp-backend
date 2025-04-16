import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private userModel: typeof UserModel,
  ) {}

  async findByEmail(email: string): Promise<UserModel> {
    return this.userModel.findOne({ where: { email } });
  }

  async createUser(data: { name: string; email: string; password: string }): Promise<UserModel> {
    const user = await this.userModel.create(data);
    return user;
  }
}
