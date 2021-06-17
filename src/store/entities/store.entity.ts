import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {Address} from './address.entity'
@Entity()
export class Store  {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

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

  
}