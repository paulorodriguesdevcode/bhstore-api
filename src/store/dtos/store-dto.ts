import { Address, Store } from '../entities';
import { ApiProperty } from '@nestjs/swagger';

export class StoreDto {
  @ApiProperty()
  readonly nome?: string;

  @ApiProperty()
  readonly descricao?: string;

  id!: string;

  key?: string;  
  
  address?: Address;
  
  constructor(store: Store) {
    this.id = store?.id;
    this.key = store?.key;
    this.address = store?.address;
  }
}
