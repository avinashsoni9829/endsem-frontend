import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user : any;
  constructor(private loginservice : LoginService) { }

  ngOnInit(): void {
     this.loginservice.getCurrentUser().subscribe(data => {
       this.user = data;
       console.log("user ",this.user);
    })
  }

}
