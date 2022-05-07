import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   constructor(private http : HttpClient)
   { 
 
   }
  
  // create a user 
    public addUser(formResponse : any)
    {
    return this.http.post(baseUrl+'/user/',formResponse);
    }
  
  }
