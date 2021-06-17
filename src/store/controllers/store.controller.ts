import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { StoreDto } from '../dtos';
import { StoreService } from '../services/store.service';

@Controller()
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async findAll() {
    return await this.storeService.findAll();
  }

  @Get(':key')
  async findOne(
    @Param('key') key: string,
  ){
    return await this.storeService.findByKey(key);
  }

  @Post()
  async create(
    @Body() dto: StoreDto,
  ) {
    return await this.storeService.create(dto);
  }

  @Delete(':key')
  async delete(@Param('key') key: string) {
    return await this.storeService.delete(key);
  }

  @Put(':key')
  async update(
    @Param('key') key: string,
    @Body() dto: StoreDto,
  ) {
    return await this.storeService.update(key, dto);;
  }


}
