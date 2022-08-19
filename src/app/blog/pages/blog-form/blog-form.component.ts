import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit, OnDestroy  {

  blogForm: FormGroup;
  commentsArray: FormArray;
  blogData: Blog[] = [];
  blogId: any;
  updatedBlog: Subscription | undefined;

  
  constructor(private fb: FormBuilder, private routes: ActivatedRoute, private blogService: BlogService, private router: Router) { 

    this.routes.paramMap.subscribe( paramMap => {
      this.blogId = paramMap.get("id");
    })

    this.blogForm = this.fb.group({
      id: [],
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([])
    });
   this.commentsArray = this.blogForm.get('comments') as FormArray
   
   
    this.updatedBlog = this.blogService.updateBlog(parseInt(this.blogId)).subscribe(data => {
      this.blogForm = this.fb.group({
        id: [data[0].id],
        title: [data[0].title],
        description: [data[0].description],
        author: [data[0].author],
        comments: this.fb.array([])
      });
      this.commentsArray = this.blogForm.get('comments') as FormArray
      for(let commentsData of data[0].comments){
        this.commentsArray.push(new FormControl(commentsData))
      }
      
    }) 
  }

  ngOnInit(): void {
  }
  
  deleteComment(i: number) {
    this.commentsArray.removeAt(i);
  }

  addComment() {
    this.commentsArray.push(new FormControl(''));
  }

  submit() {
    console.log(this.blogForm?.value)
    let dt = this.blogForm.getRawValue() as Blog 
    if(this.blogId && dt.id !== null)
       this.blogService.editBlog(dt).subscribe(()=>{
        alert("Blog has been added updated");
        this.router.navigate(['/blog']);
       })
    else
       this.blogService.createBlog(dt).subscribe(() => {
        alert("New blog has been added");
        this.router.navigate(['/blog']);
       }) 
        
  }

  ngOnDestroy(): void {
   
    this.updatedBlog!.unsubscribe()
  }
}