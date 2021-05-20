import { Injectable } from '@angular/core';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAllBooks(): Book[]{
    return [{name: 'Knjiga 1', writer: 'pera', pages: 300},
            {name: 'Knjiga 2', writer: 'jova', pages: 100},
            {name: 'Knjiga 3', writer: 'pera', pages: 150}];
  }

  findBook(searchStr: string): Book{
    if (searchStr === '') {
      return null;
    }
    const allBooks = this.getAllBooks();
    return allBooks.find(book => book.name.toLowerCase().includes(searchStr.toLowerCase()));
  }
}
