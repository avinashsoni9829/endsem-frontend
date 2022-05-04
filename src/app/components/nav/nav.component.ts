import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedin:any ;
  constructor(private loginservice : LoginService) { }

  ngOnInit(): void {
     this.loggedin = this.loginservice.isLoggedIn();
     this.loginservice.loginStatusSubject.asObservable().subscribe(data => {
       this.loggedin = this.loginservice.isLoggedIn();
     })

  }
  logout(){
    this.loginservice.logout();
    window.location.reload();
  }

}
