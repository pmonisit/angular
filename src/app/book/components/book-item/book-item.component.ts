import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book | undefined
  @Output() actionEmitter = new EventEmitter<Book>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  deleteBook(bookId: any){
    this.actionEmitter.emit(bookId)
  }

}
