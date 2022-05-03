import { Injectable } from '@angular/core';
import { baseUrl} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  public getCurrentUser(){
    return this.http.get(baseUrl+'/current-user');
    
  }

  public generateToken(formResponse : any){
     return this.http.post(baseUrl +'/generate-token',formResponse);
  }

  // user login :  

  public loginUser(token : any){
     localStorage.setItem("token",token);
     return true; 
  }

  public isLoggedIn(){
    let token = localStorage.getItem("token");
     if(token == undefined || token == ''|| token == null){
        return false;
     }
     return true;

  }

  public logout(){
     localStorage.removeItem("token");
     localStorage.removeItem("user");
     return true;
  }


  public getToken(){
     return localStorage.getItem("token");
  }

  public setUser(user : any){
     localStorage.setItem("user",JSON.stringify(user));
  }

  public getUser(){
    let user = localStorage.getItem("user");
    if(user!=null){
      return JSON.parse(user);
    }
    else{
       this.logout();
       return null;
    }
  }

  public getUserRole(){
     let user = this.getUser();
     return user.authorities[0].authority;

  }

}
