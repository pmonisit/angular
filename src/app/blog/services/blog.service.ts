import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  constructor(private http: HttpClient) { }

  createBlog(blog: Blog){
    return this.http.post<Blog>(`https://json-server-seven-mock.herokuapp.com/blogs`,blog).pipe(
      tap(x => x))
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`https://json-server-seven-mock.herokuapp.com/blogs`).pipe(tap((blog: Blog[]) => {
      return blog;
    }));
  }

  updateBlog(id: number){
    return this.http.get<Blog[]>(`https://json-server-seven-mock.herokuapp.com/blogs`).pipe(
      map((blog: Blog[]) => {
        return blog.filter( x => x.id === id)      
      })
    )
  }
    
  editBlog(blog: Blog){
    return this.http.put<Blog>(`https://json-server-seven-mock.herokuapp.com/blogs/${blog.id}`, blog).pipe(
      tap(x => x)
    )
  }

  deleteOne(id: string){
    return this.http.delete<Blog>(`https://json-server-seven-mock.herokuapp.com/blogs/${id}`).pipe(
      tap(x => x))
  }

  deleteAll(){
    this.http.delete<Blog>(`https://json-server-seven-mock.herokuapp.com/blogs/`).pipe(tap(x => x))
  }
}

