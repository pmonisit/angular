import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.scss']
})
export class SignupUpPageComponent implements OnInit {
  hide = true;
  public signUpForm !: FormGroup

  constructor(
    private formBuilder: FormBuilder,  
    public authService: AuthService) 
    { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required]
    })
  }

  registerUser() {
    this.authService.signUp(this.signUpForm.value).subscribe((res) => {
      if (res.result) {
        this.signUpForm.reset();
      }
    });
  }

}
