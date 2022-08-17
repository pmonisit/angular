import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  authorArray: FormArray;
  bookData: Book[] = [];
  bookId: any;
  updatedBook: Subscription | undefined;
  private router: Router | undefined;


  constructor(private fb: FormBuilder, private routes: ActivatedRoute, private bookService: BookService ) {
      this.routes.paramMap.subscribe( paramMap => {
        this.bookId = paramMap.get('id');
      })
     
      this.bookForm = this.fb.group({
        id: [],
        name: [''],
        isbn: [''],
        authors: this.fb.array([])
      });
     this.authorArray = this.bookForm.get('authors') as FormArray

     this.updatedBook = this.bookService.updateBook(parseInt(this.bookId)).subscribe(data => {
      this.bookForm = this.fb.group({
        id: [data[0].id],
        name: [data[0].name],
        isbn: [data[0].isbn],
        authors: this.fb.array([])
      });
      this.authorArray = this.bookForm.get('authors') as FormArray
      for(let authorsData of data[0].authors){
        this.authorArray.push(new FormControl(authorsData))
      }
      
    }) 
}

  ngOnInit(): void {
  }

  deleteAuthor(i: number) {
    this.authorArray.removeAt(i);
  }

  addAuthor() {
    this.authorArray.push(new FormControl(''));
  }

  submit() {
    console.log(this.bookForm?.value)
    let dt = this.bookForm.getRawValue() as Book 
    if(this.bookId && dt.id !== null)
       this.bookService.editBook(dt).subscribe()
    else
       this.bookService.createBook(dt).subscribe() 

    this.router?.navigate(['/books'])
  }

  ngOnDestroy(): void {
    this.updatedBook!.unsubscribe()
  }

}
