import {Address} from './address.entity'
import { v4 as uuid } from 'uuid';


export class Store  {

  id? = uuid();

  key?: string;
  
  address?: Address;

  constructor(key:string, address:Address) {
    this.key = key;
    this.address = address
  }
  
}