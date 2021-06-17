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

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<StoreDto | undefined> {
    return await this.storeService.findOne(id);
  }

  @Post()
  async create(
    @Body() dto: StoreDto,
  ) {
    return await this.storeService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.storeService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: StoreDto,
  ) {
    return await this.storeService.update(id, dto);;
  }


}
