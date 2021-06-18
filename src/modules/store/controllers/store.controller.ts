import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/services';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/modules/auth/services/local-auth.guards';
import { StoreDto } from '../dtos';
import { StoreService } from '../services/store.service';

@Controller()
export class StoreController {
  constructor(
    private readonly storeService: StoreService,
    private authService: AuthService) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.storeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':key')
  async findOne(
    @Param('key') key: string,
  ) {
    return await this.storeService.findByKey(key);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() dto: StoreDto,
  ) {
    return await this.storeService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':key')
  async delete(@Param('key') key: string) {
    return await this.storeService.delete(key);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':key')
  async update(
    @Param('key') key: string,
    @Body() dto: StoreDto,
  ) {
    return await this.storeService.update(key, dto);;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }
  
}
