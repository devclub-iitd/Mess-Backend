import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ManagerAuthGuard } from './passport/manager-auth.guard';
import { LocalAuthGuard } from './passport/local-auth.guard';
import { AdminAuthGuard } from './passport/admin-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return (req.session.user = req.user);
  }

  @UseGuards(AdminAuthGuard)
  @Post('logout')
  async logout(@Req() req) {
    return (req.session.user = null);
  }

  @UseGuards(AdminAuthGuard)
  @Get('myProfile')
  async myProfile(@Req() req) {
    const id = req.session.user.id;
    return this.authService.myProfile(id);
  }

  @UseGuards(AdminAuthGuard)
  @UseGuards(ManagerAuthGuard)
  @Post('createAdmin')
  async createAdmin(@Body() body) {
    const { kerberos, password, name, role } = body;
    const res = await this.authService.createAdmin(
      kerberos,
      password,
      name,
      role,
    );
    if (!res) {
      throw new BadRequestException('User already exists');
    }
    return res;
  }
}
