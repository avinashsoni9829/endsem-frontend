import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


 
 @Injectable()
 export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginservice : LoginService){
         
    }
     intercept(
         req: HttpRequest<any>, 
         next: HttpHandler): Observable<HttpEvent<any>> 
         {
         let authReq = req;   
         const token = this.loginservice.getToken();
         if(token!=null){
              authReq = authReq.clone(
                  {
                      setHeaders : {Authorization:`Bearer ${token}`}
                  } 
                  
                  )
         }

         return next.handle(authReq);
         }

         
     
 }


 export const authInterceptorProvider = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
   }
    
 ];
