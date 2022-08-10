import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   books: Book[] = [
    {
      id: 1, 
      name: "Book1", 
      authors: ["John Doe"],
      isbn: "123456789X"
    },
    {
      id: 2, 
      name: "Book2", 
      authors: ["Jane Doe"],
      isbn: "987654321X"
    }
  ]
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

}
