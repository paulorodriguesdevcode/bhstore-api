import { HttpException, Injectable } from '@nestjs/common';
import { Store } from '../entities'
import { IAddress } from '../models/address.enum';

const address :IAddress = {country:'BR',state:'MG',city:'BH',district:'TUPI'} 
const store = new Store('1', address)
const store1 = new Store('2', address)
const store2 = new Store('3', address)

const stores: Store[] = []
stores.push(store)
stores.push(store1)
stores.push(store2)

@Injectable()
export class StoreService {

  async findAll() {
    return stores
  }

  async findByKey(key: string) {
    const storeSelected = stores.filter(store => store.key == key)

    return storeSelected
  }

  async create(dto: Store) {
    stores.push(dto)
    return stores
  }

  async update(key: string, dto: Store) {

    if (!key || !dto || !dto.address.country || !dto.address.state || !dto.address.city || !dto.address.district) {
      return new HttpException('All fields are required', 400)
    }

    const storeSelectedIndex = stores.findIndex(store => store.key === key)

    if (storeSelectedIndex < 0) {
      return new HttpException('Store not found', 400)
    }

    console.log('temos::: ',dto)
    console.log('vai assinar:: ',stores[storeSelectedIndex])

    stores[storeSelectedIndex].key = dto.key;
    stores[storeSelectedIndex].address = dto.address;

    console.log('fica assim ::',stores[storeSelectedIndex])

    return stores[storeSelectedIndex]
  }

  async delete(key: string) {

    if (!key) {
      return new HttpException('The key is required', 400)
    }

    const storeSelectedIndex = stores.findIndex(store => store.key === key)

    if (storeSelectedIndex < 0) {
      return new HttpException('Store not found', 400)
    }

    stores.splice(storeSelectedIndex, 1)

    return stores
  }
}
