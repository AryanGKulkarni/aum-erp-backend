import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UserModel> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      if (!email.endsWith('@aumworx.in')) throw new UnauthorizedException('Email domain not allowed');
      return user;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: UserModel) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(data: { name: string; email: string; password: string }) {
    const existing = await this.usersService.findByEmail(data.email);
    if (!data.email.endsWith('@aumworx.in')) throw new UnauthorizedException('Email domain not allowed');
    if (existing) throw new BadRequestException('Email already exists');

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.usersService.createUser({
      name: data.name,
      email: data.email,
      password: hashedPassword,
    });

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: user.id, name: user.name, email: user.email },
    };
  }
}
