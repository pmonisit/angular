import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, public router: Router) { }

  createBook(book: Book){
    return this.http.post<Book>(`https://json-server-seven-mock.herokuapp.com/books`,book).pipe(
      tap(x => x))
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`https://json-server-seven-mock.herokuapp.com/books`).pipe(tap((book: Book[]) => {
      return book;
    }));
  }

  updateBook(id: number){
    return this.http.get<Book[]>(`https://json-server-seven-mock.herokuapp.com/books`).pipe(
      map((blog: Book[]) => {
        return blog.filter( x => 
          x.id === id  
          )      
      })
      
    )
  }

  editBook(book: Book){
    return this.http.put<Book[]>(`https://json-server-seven-mock.herokuapp.com/books/${book.id}`, book).pipe(
      tap(x => x)
    )
  }

  deleteOne(id: string){
    return this.http.delete<Book>(`https://json-server-seven-mock.herokuapp.com/books/${id}`).pipe(
      tap(x => x))
  }

  deleteAll(){
    this.http.delete<Book>(`https://json-server-seven-mock.herokuapp.com/books/`).pipe(tap(x => x))
  }
 
           
}
