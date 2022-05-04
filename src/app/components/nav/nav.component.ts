import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedin:any ;
  user : any;
  username : any;
  constructor(private loginservice : LoginService) { }

  ngOnInit(): void {
     this.loggedin = this.loginservice.isLoggedIn();
     this.loginservice.getCurrentUser().subscribe(data => {
       this.user = data;
       console.log("user details");
       this.username = this.user.username;
       console.log(this.user.username);
       
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
  logout(){
    this.loginservice.logout();
    window.location.reload();
  }

}
