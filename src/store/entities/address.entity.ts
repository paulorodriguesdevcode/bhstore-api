import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Store } from './store.entity';

@Entity()
export class Address {


  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 10 })
  country?: string;

  @Column({ length: 100 })
  state?: string;

  @Column({ length: 5 })
  city?: string;

  @Column({ length: 100 })
  district?: string;
  
  @OneToOne(() => Store, (store: Store) => store.address, {
    onDelete: 'CASCADE',
  })
  store?: Store;

  
}
