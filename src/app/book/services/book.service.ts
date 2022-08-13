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
    },
    {
      id: 3, 
      name: "The Crossing", 
      authors: ["Michael Doane"],
      isbn: "7593657396"
    }
  ]
  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  setBook(dt: Book) {
    this.books.push(dt)
  }

  editBook(dt: Book){
    for(let data of this.books){
      if(data.id === dt.id){
        data.name = dt.name
        data.isbn = dt.isbn
        data.authors = dt.authors
      }
    }
  }
           
}
