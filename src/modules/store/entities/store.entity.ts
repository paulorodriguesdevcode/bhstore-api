import { Column, Entity, JoinColumn,  OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {Address} from './address.entity'
import { v4 as uuid } from 'uuid';


@Entity()
export class Store  {

  @PrimaryGeneratedColumn('uuid')
  id? = uuid();

  @Column({ length: 100 })
  key?: string;
  
  @OneToOne(() => Address, (address: Address) => address.store, {
    nullable: true,
    eager: true,
    cascade: ['insert', 'remove', 'update'],
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  address?: Address;


  constructor(key:string, address:Address) {
    this.key = key;
    this.address = address
  }
  
}