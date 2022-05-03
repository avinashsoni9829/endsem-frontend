import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private loginservice : LoginService , private route : Router){
     
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let loginstatus = this.loginservice.isLoggedIn();
      let role = this.loginservice.getUserRole();
 
      if(loginstatus == true && role == 'NORMAL') 
      {
        return true;
      }
 
      this.route.navigateByUrl('login');
 
      return false;
  }
  
}
