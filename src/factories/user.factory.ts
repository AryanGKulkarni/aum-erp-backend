import { faker } from '@faker-js/faker';
import { User } from '../models/user.model';

export function generateUserData(): Partial<User> {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(), // You can hash this if needed
  };
}
