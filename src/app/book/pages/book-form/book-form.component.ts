import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private fb: FormBuilder, private routes: ActivatedRoute, private books: BookService ) {
      this.bookId = this.routes.snapshot.paramMap.get('id')
      if(this.bookId === 'true')
        this.bookData = [{id: 0, name: '', isbn: '', authors: ['']}]
        else
         this.bookData = this.books.getBooks().filter(book => book.id === parseInt(this.bookId))
      
       
      this.bookForm = this.fb.group({
        name: [this.bookData[0].name],
        isbn: [this.bookData[0].isbn],
        authors: this.fb.array([])
      });
      this.authorArray = this.bookForm.get('authors') as FormArray
      for(let newData of this.bookData[0].authors)
        this.authorArray.push(new FormControl(newData))
   }

  ngOnInit(): void {
  }

  deleteAuthor(i: number) {
    this.authorArray.removeAt(i);
  }

  addAuthor() {
    this.authorArray.push(new FormControl(''));
  }

  submit () {
    console.log(this.bookForm.value)
    let dt = this.bookForm.getRawValue() as Book
    if(this.bookId)
      return this.books.editBook(dt)
    else  
      return this.books.setBook(dt)
  }
  
}
