import { v4 as uuid } from 'uuid';
import { IAddress } from '../models/address.enum';


export class Store  {

  id? = uuid();

  key?: string;
  
  address?: IAddress;

  constructor(key:string, address:IAddress) {
    this.key = key;
    this.address = address
  }
  
}