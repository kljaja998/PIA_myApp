import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../books.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.allBooks = this.bookService.getAllBooks();
  }
  
  allBooks: Book[];

  searchParam: string;

  searchBook: Book;

  searchBooks(){
    this.searchBook = this.bookService.findBook(this.searchParam);
  }

}
