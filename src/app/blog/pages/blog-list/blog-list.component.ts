import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogId: Blog | undefined;
  public blogs: Blog[] = []
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs()
  }

  editAction(blog: Blog){
    this.blogId = blog;
    console.log(this.blogId.id)
  }
  deleteAction(book: Blog){
    this.blogId = book;
    console.log(this.blogId.id)
  }
}
