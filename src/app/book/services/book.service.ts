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
    return this.http.post<Book>(`${environment.url}/books`,book).pipe(
      tap(x => x))
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.url}/books`).pipe(tap((book: Book[]) => {
      return book;
    }));
  }

  updateBook(id: number){
    return this.http.get<Book[]>(`${environment.url}/books`).pipe(
      map((blog: Book[]) => {
        return blog.filter( x => 
          x.id === id  
          )      
      })
      
    )
  }

  editBook(book: Book){
    return this.http.put<Book[]>(`${environment.url}/books/${book.id}`, book).pipe(
      tap(x => x)
    )
  }

  deleteOne(id: string){
    return this.http.delete<Book>(`${environment.url}/books/${id}`).pipe(
      tap(x => x))
  }

  deleteAll(){
    this.http.delete<Book>(`${environment.url}/books/`).pipe(tap(x => x))
  }
 
           
}
