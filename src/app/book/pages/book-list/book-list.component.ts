import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookId: Book | undefined;
  public books: Book[] = []

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks()
  }

  deleteAction(book: Book){
    this.bookId = book;
    console.log(this.bookId.id)
  }

  actionButtons (book: Book){
    this.bookId = book;
    console.log(this.bookId.id)
  }
  
  commandBarButtons(){
    this.router.navigate(['form', 2])
  }


}
