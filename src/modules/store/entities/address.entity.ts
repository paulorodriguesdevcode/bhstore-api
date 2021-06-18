import { v4 as uuid } from 'uuid';
import { Store } from './store.entity';



export class Address {

  id?= uuid();

  country?: string;

  state?: string;

  city?: string;

  district?: string;

  store?: Store;

  constructor(country:string, state:string, city:string, district:string) {
    this.country = country;
    this.state = state
    this.city = city
    this.district = district
  }


}
