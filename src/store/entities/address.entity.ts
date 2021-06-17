import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Store } from './store.entity';



@Entity()
export class Address {

  @PrimaryGeneratedColumn('uuid')
  id?= uuid();

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

  constructor(country:string, state:string, city:string, district:string) {
    this.country = country;
    this.state = state
    this.city = city
    this.district = district
  }


}
