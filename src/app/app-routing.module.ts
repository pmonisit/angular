import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupUpPageComponent } from './components/signup-up-page/signup-up-page.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "signup",
    component: SignupUpPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "book",
    loadChildren: () => import("./book/book.module").then(m => m.BookModule),
    canActivate: [AuthGuard] 
  },
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule),
    canActivate: [AuthGuard] 
  },
  {
    path: "profile",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
