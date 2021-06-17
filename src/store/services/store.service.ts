import { HttpException, Injectable } from '@nestjs/common';
import { Address, Store } from '../entities'

const address = new Address('BR', 'MG', 'BH', 'TUPI')
const store = new Store('1', address)
const store1 = new Store('2', address)
const store2 = new Store('3', address)

const stores:Store[]=[]
stores.push(store)
stores.push(store1)
stores.push(store2)

@Injectable()
export class StoreService {

  async findAll() {
    return stores
  }

  async findByKey(key:string) {
    const storeSelected = stores.filter(store=> store.key == key)

    if(storeSelected.length === 0){
      return new HttpException('Store not found', 400)
    }

    return storeSelected
  }

  async create(dto:Store) {
    stores.push(dto)
    return stores
  }

  async update(key: string, dto:Store) {  

    if(!key){
      return new HttpException('The key is required', 400)
    }  

    const storeSelectedIndex = stores.findIndex(store => store.key === key)

    if(storeSelectedIndex<0){
      return new HttpException('Store not found', 400)
    }  

    Object.assign(stores[storeSelectedIndex],dto)
    
    return stores[storeSelectedIndex]
  }

  async delete(key: string) {

    if(!key){
      return new HttpException('The key is required', 400)
    }  

    const storeSelectedIndex = stores.findIndex(store => store.key === key)

    if(storeSelectedIndex < 0){
      return new HttpException('Store not found', 400)
    }  

    stores.splice(storeSelectedIndex,1)

    return stores
  }
}
