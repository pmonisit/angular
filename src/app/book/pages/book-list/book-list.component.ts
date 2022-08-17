import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, Subscription } from 'rxjs';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookId: Book | undefined;
  public books: Book[] = [];
  updatedBook: Subscription | undefined;
  private router: Router | undefined;


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(bookList => {
      this.books = bookList
    });
  }

  deleteBook(id: any){
    this.updatedBook = forkJoin([this.bookService.deleteOne(id), this.bookService.getBooks()]).pipe(
    map(([x,y]) => {
      this.books = y
    })).subscribe()
     this.router!.navigate(['/blog']);
  }

  ngOnDestroy(): void {
    this.updatedBook?.unsubscribe()
  }


}
