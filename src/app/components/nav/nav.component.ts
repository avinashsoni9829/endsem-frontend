import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedin:any ;
  user : any;
  isUserAdmin = false;
  username : any;
  constructor(private loginservice : LoginService , private route : Router) { }

  ngOnInit(): void {
     this.loggedin = this.loginservice.isLoggedIn();
     this.loginservice.getCurrentUser().subscribe(data => {
       this.user = data;
       console.log("user details");
       this.username = this.user.username;
       console.log(this.user.username);
       if(this.user.username == "admin"){
         this.isUserAdmin = true;
       }
       
     });
     console.log(this.user);
     
     this.loginservice.loginStatusSubject.asObservable().subscribe(data => {
       this.loggedin = this.loginservice.isLoggedIn();
       this.user = this.loginservice.getCurrentUser().subscribe(data => {
         this.user = data;
         this.username = this.user.username;
       });
     })

  }
  homecall(){
    if(this.loggedin == false){
       this.route.navigateByUrl('/home');
    }
    else
    if(this.isUserAdmin){
        this.route.navigateByUrl('/admin-dashboard');
    }
    else 
    {
      this.route.navigateByUrl('/user-dashboard');
    }
}
  logout(){
    this.loginservice.logout();
    window.location.reload();
  }

}
