import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http : HttpClient) { }
  
  // category 
  public allCategory()
  {
    return this.http.get(baseUrl + '/category/');
  }

  public addCategory(formResponse : any){
    return this.http.post(baseUrl + '/category/', formResponse);
  }


  // quiz 

  public allQuiz(){
     return this.http.get(baseUrl + '/quiz/');
  }
  public updQuiz(formResponse : any){
    return this.http.put(baseUrl + `/quiz/`,formResponse);
  }

  public addQuiz(formResponse : any){
    return this.http.post(baseUrl + '/quiz/', formResponse);
  }

  public removeQuiz(id : any){
    return this.http.delete(baseUrl + `/quiz/${id}`);
  }

  public singleQuiz(id : any){
    return this.http.get(baseUrl + `/quiz/${id}`);
  }
  // questions 
  public getQuestionsByQuiz(id : any){
     return this.http.get(baseUrl + `/question/quiz/${id}`);
  }
  
  public getsinglequestion(id : any){
    return this.http.get(baseUrl +'/question/' + id );
  }
  public addQuestions(formdata : any){
      return this.http.post(baseUrl + '/question/',formdata);
  }

  public deleteQuestions(id : any){
     return this.http.delete(baseUrl + `/question/${id}`);
  }
  

  public updateQuestion(formadata : any){
     return this.http.put(baseUrl + '/question/',formadata);
  }
}
