import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/singup.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'Login with email and password' })
  @ApiBody({ type: LoginDto })
  async login(@Body() dto: LoginDto, @Request() req) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  @ApiOperation({ summary: 'Signup with email and password' })
  @ApiBody({ type: SignupDto })
  async signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }
}
