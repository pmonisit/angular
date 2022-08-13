import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  profileForm: FormGroup;
  profileData: User[] = [];
  userId: any

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      bio: [''],
      active: ['']
    })
   }

  ngOnInit(): void {
  }

  submit () {
    console.log(this.profileForm.value)
  }

}
