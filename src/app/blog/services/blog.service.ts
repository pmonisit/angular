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
    return this.http.post<Blog>(`${environment.url}/blogs`,blog).pipe(
      tap(x => x))
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.url}/blogs`).pipe(tap((blog: Blog[]) => {
      return blog;
    }));
  }

  updateBlog(id: number){
    return this.http.get<Blog[]>(`${environment.url}/blogs`).pipe(
      map((blog: Blog[]) => {
        return blog.filter( x => x.id === id)      
      })
    )
  }
    
  editBlog(blog: Blog){
    return this.http.put<Blog>(`${environment.url}/blogs/${blog.id}`, blog).pipe(
      tap(x => x)
    )
  }

  deleteOne(id: string){
    return this.http.delete<Blog>(`${environment.url}/blogs/${id}`).pipe(
      tap(x => x))
  }

  deleteAll(){
    this.http.delete<Blog>(`${environment.url}/blogs/`).pipe(tap(x => x))
  }
}

