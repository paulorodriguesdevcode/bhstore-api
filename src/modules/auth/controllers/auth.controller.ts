import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
  
  import {  JwtAuthGuard } from '../../../guards';
  import { LocalAuthGuard } from '../services';
  
  import { AuthService } from '../services';
  
  @ApiTags('Auth')
  @Controller('auth')
  export class AuthController {  
    constructor(private readonly authService: AuthService) { }
  
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Request() req: any): Promise<any> {
      return await this.authService.login(req.user);
    }    
  
    @UseGuards(JwtAuthGuard)
    @Get('logout')
    @HttpCode(HttpStatus.OK)
    async logOut() {
      return;
    }
  }
  