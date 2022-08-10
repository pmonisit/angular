import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: Blog[] = [
    {
      id: 1, 
      title: "First Blog", 
      description: "This is the first blog", 
      author: "John Doe", 
      comments: ["This is the first comment"]
    },
    {
      id: 2, 
      title: "Second Blog", 
      description: "This is the second blog", 
      author: "Jane Doe", 
      comments: ["This is the second comment"]
    }
  ]

  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }
}
