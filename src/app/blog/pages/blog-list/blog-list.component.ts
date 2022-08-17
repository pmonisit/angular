import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogId: Blog | undefined;
  blogs: Blog[] = [];
  updatedBlog: Subscription | undefined;
  private router: Router | undefined;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    // this.blogs = this.blogService.getBlogs()
    this.blogService.getBlogs().subscribe(blogList => {
      this.blogs = blogList
    });
  }

  deleteBlog(id: any){
    this.updatedBlog = forkJoin([this.blogService.deleteOne(id), this.blogService.getBlogs()]).pipe(
    map(([x,y]) => {
      this.blogs = y
    })).subscribe()
     this.router!.navigate(['/blog']);
  }

  ngOnDestroy(): void {
    this.updatedBlog?.unsubscribe()
  }
  
  // deleteAllBlogs(blog: Blog){
  //   this.blogService.deleteAll
  // }
}
