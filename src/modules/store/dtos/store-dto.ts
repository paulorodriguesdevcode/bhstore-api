import {  Store } from '../entities';
import { ApiProperty } from '@nestjs/swagger';
import { IAddress } from '../models/address.enum';

export class StoreDto {
  @ApiProperty()
  readonly nome?: string;

  @ApiProperty()
  readonly descricao?: string;

  id?: string;

  key?: string;  
  
  address?: IAddress;
  
  constructor(store: Store) {
    this.id = store.id;
    this.key = store?.key;
    this.address = store?.address;
  }
}
