import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  public loginForm!: FormGroup
  constructor(
    private formbuilder: FormBuilder, public authService: AuthService) 
    { 
      this.loginForm = this.formbuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    
  }

  loginUser() {
    this.authService.signIn(this.loginForm.getRawValue());
  }

}
