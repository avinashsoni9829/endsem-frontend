import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
   signupForm : any;
   showsuccessalert = false;
   showfailurealert = false;
  constructor(private userservice : UserService , private route : Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null,[Validators.required]),
      lastName: new FormControl(null,[Validators.required]),
      username: new FormControl(null,[Validators.required]),
      phone: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required , Validators.email]),
      password: new FormControl(null,[Validators.required , ]),
    });

  }

  toggleAlerts(){
    this.showsuccessalert = false;
  

    this.showfailurealert = false;
  }

  onSubmit(){
    console.log(this.signupForm.value);
    this.userservice.addUser(this.signupForm.value).subscribe(
      (data) =>{
      
        console.log(data);
        this.showsuccessalert = true;
        this.route.navigateByUrl('/login');
      },
      (error) => {
        this.showfailurealert = true;
        console.log(error);
      

        
      }
    )

  }

}
