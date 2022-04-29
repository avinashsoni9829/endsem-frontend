import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path : "",
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path : "signup",
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path : "login",
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path : "about",
    component:AboutComponent,
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
