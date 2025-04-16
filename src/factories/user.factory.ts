import { faker } from '@faker-js/faker';
import { UserModel } from '../models/user.model';

export function generateUserData(): Partial<UserModel> {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(), // You can hash this if needed
  };
}
