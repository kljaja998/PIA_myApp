import { Injectable } from '@angular/core';
import { Writer } from './models/writer';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor() { }

  getAllWriters(): Writer[]{
    let allWriters: Writer[] = [{firstName: 'pera', lastName: 'peric', awards:2, birthday: new Date('1956-10-12')},
  {firstName:'jova', lastName: 'jovic', awards: 3, birthday: new Date('1987-12-02')},
  {firstName:'mita', lastName: 'mitic', awards: 1, birthday: new Date('1972-08-03')}];
    return allWriters;
  }

  sortWritersByAward(): Writer[]{
    let allWriters = this.getAllWriters();
    return allWriters.sort((a,b)=> {
      return b.awards - a.awards
    })
  }
  
  sortWritersByBirthday(): Writer[]{
    let allWriters = this.getAllWriters();
    return allWriters.sort((a,b)=> {
      if(a.birthday > b.birthday)
        return 1
      else if(a.birthday < b.birthday)
        return -1
      else
        return 0
    })
  }
}