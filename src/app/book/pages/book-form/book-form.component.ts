import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  authorArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: [''],
      isbn: [''],
      authors: this.fb.array([])
    });
    this.authorArray = this.bookForm.get('authors') as FormArray
   }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.bookForm.value)
  }

  addAuthor() {
    this.authorArray.push(new FormControl(''));
  }

  deleteAuthor(i: number) {
    this.authorArray.removeAt(i);
  }

}
