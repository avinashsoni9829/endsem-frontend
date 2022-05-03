import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { UserGuard } from './services/user.guard';

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
  },
  {
     path : "admin-dashboard",
     component :AdminDashboardComponent,
     pathMatch:'full',
     canActivate:[AdminGuardGuard],
  },
  {
     path:"user-dashboard",
     component:UserDashboardComponent,
     pathMatch:'full',
     canActivate:[UserGuard],
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
