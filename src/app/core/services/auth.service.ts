import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/user/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // https://fake-auth-server-princeandwill.herokuapp.com/
  // http://localhost:3000
  endpoint: string = 'https://fake-auth-server-princeandwill.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) { }

  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(
    tap(()=> {
      alert("Registered successfully. You may now login")
      this.router.navigate(['/login'])
    }));
    
  }
  
  signIn(user: User) {
    return this.http
      .post(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.accessToken);
        this.router.navigate(['/home']);
      });  
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // getUserProfile(id: User): Observable<any> {
  //   let api = `${this.endpoint}/users/${id}`;
  //   return this.http.get(`${this.endpoint}/users/${id}`, { headers: this.headers }).pipe(
  //     map((res) => {
  //       return res || {};
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  // handleError(error: HttpErrorResponse) {
  //   let msg = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     msg = error.error.message;
  //   } else {
  //     // server-side error
  //     msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(msg);
  // }

}
