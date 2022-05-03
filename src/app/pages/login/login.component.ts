import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginform : any;
   showsuccessalert = false;
   showfailurealert = false;
  constructor(private loginservice : LoginService , private route : Router) { }

  ngOnInit(): void {
    this.loginform = new FormGroup({
        username : new FormControl(null,[Validators.required]),
        password : new FormControl(null,[Validators.required])
    });
  } 

  toggleAlerts(){
    this.showsuccessalert = false;
  

    this.showfailurealert = false;
  }

  onSubmit(){
       console.log(this.loginform.value);
       this.loginservice.generateToken(this.loginform.value).subscribe(
         (data : any) =>{
            console.log("Succces!");
            console.log(data);
            this.showsuccessalert = true;
            
            let token = data.token;
           // set user token in the local Storage 
            this.loginservice.loginUser(token);

            this.loginservice.getCurrentUser().subscribe(
              (user :any) => {
                console.log(user);
                // set the user in the local Storage
                this.loginservice.setUser(user);
                // now we will redirect acc to the role 
                let role = this.loginservice.getUserRole();

                if(role == 'ADMIN'){
                    this.route.navigateByUrl('admin-dashboard');
                }
                else
                if(role == 'NORMAL'){
                   this.route.navigateByUrl('user-dashboard');
                }
                else
                {
                   this.loginservice.logout();
                   location.reload();
                   
                }
                window.location.reload();
              },
              (error : any) => {

              }

            )

            
         },
         (error : any) =>{
          this.showfailurealert = true;
           console.log(error);
           
         }

       )
   }

}
