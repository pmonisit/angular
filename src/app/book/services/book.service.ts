import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
   books: Book[] = [
    {
      id: 1, 
      name: "The Lion, the Witch, and the Wardrobe", 
      authors: ["C.S. Lewis"],
      isbn: "123456789X"
    },
    {
      id: 2, 
      name: "To Kill a Mockingbird", 
      authors: ["Harper Lee"],
      isbn: "987654321X"
    }
  ]
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

}
