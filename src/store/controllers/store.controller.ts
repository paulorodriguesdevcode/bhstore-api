import { Controller, Get, Query } from '@nestjs/common';
import { Store } from '../entities';
import { StoreService } from '../services/store.service';

@Controller()
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async findAll(){
  // ): Promise<Store[]> {

    return await this.storeService.findAll();
  }
}
