import { Injectable } from '@nestjs/common';
import { Address, Store } from '../entities'

const address = new Address('BR', 'MG', 'BH', 'TUPI')
const store = new Store('123454', address)
const store1 = new Store('123454', address)
const store2 = new Store('123454', address)

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

  async create(dto:Store) {
    return store
  }

  async update(id: string, dto:Store) {
    return store
  }

  async delete(id: string) {
    return store
  }
}
