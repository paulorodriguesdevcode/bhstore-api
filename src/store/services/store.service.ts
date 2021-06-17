import { Injectable } from '@nestjs/common';
import { StoreDto } from '../dtos';
import { Address, Store } from '../entities'

const address = new Address('111', 'BR', 'MG', 'BH', 'TUPI')
const store = new Store('1', '123454', address)
const store1 = new Store('2', '123454', address)
const store2 = new Store('3', '123454', address)

const stores = [];
stores.push(store)
stores.push(store1)
stores.push(store2)


@Injectable()
export class StoreService {

  async findAll() {
    return stores
  }

  async findOne(id) {
    return store
  }

  async create(dto: StoreDto) {
    return store
  }

  async update(id: string, dto: StoreDto) {
    return store
  }

  async delete(id: string) {
    return store
  }
}
