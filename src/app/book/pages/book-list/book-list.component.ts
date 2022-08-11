import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books: Book[] = []
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks()
  }

  editAction(book: BookService){
    console.log(book)
  }
  // deleteAction(book: BookService){
  //   console.log(book)
  // }

}
