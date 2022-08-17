import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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
    private http: HttpClient, 
    private router: Router, 
    public authService: AuthService) 
    { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required]
    })
  }

  // signUp(){
  //   this.http.post<any>(`${environment.url}/users`,this.signUpForm.value)
  //   .subscribe(res=>{
  //     alert('Registered successfully');
  //     this.signUpForm.reset()
  //     this.router.navigate(["login"])
  //   },err=>{
  //     alert("Something went wrong")
  //   })
  // }

  registerUser() {
    this.authService.signUp(this.signUpForm.value).subscribe((res) => {
      if (res.result) {
        this.signUpForm.reset();
        this.router.navigate(['login']);
      }
    });
  }

}
