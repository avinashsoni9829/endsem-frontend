import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';

import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})


export class QuizPageComponent implements OnInit , OnDestroy
{
  qid : any;
  questions : any;
  points = 0;
  curr_idx = 0;
  ans : any;
  countDown: Subscription ;
  counter = 0;
  tick = 1000;
  response : any;
  res:any;
  maxscore :any;
  duration:any;
  quizdetails : any;
  SolutionSheet :any = {};
  constructor(private route : ActivatedRoute , private adminService : AdminService , private rt  : Router ) { }
  

  ngOnInit(): void {
   
 

   this.qid = this.route.snapshot.params.qId;
  
   console.log(this.qid);
   this.adminService.getQuestionsByQuiz(this.qid).subscribe(
     (data) =>{
        this.questions = data;
        console.log(this.questions);
        
     },
   (error) => {
      console.log(error);
      
   }
   )
   
   this.adminService.singleQuiz(this.qid).subscribe((data) =>{
      this.quizdetails = data;
      this.duration = this.quizdetails.duration;
      this.counter = this.duration * 60;
        setTimeout(() => {
          this.rt.navigateByUrl('result',{state : {
            soln: this.SolutionSheet,
            quizId : this.qid
          }});
          
      }, this.duration*60*1000);
        

    
 
   },
   (error) =>{
      console.log(error);
      
   })
   
   
   this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
 
  }

  ngOnDestroy(): void {
    
  }



  rem(){
    this.res = document.querySelector('input[name="flexRadioDefault"]:checked');
    this.qid = this.route.snapshot.params.qId;
    this.SolutionSheet[this.questions[this.curr_idx].quesid] = this.res;
    console.log(this.SolutionSheet);
    
    this.curr_idx = this.curr_idx - 1;
   
  }

  add(){
    this.res = document.querySelector('input[name="flexRadioDefault"]:checked');
    this.qid = this.route.snapshot.params.qId;
    console.log("id after this : ");
    
    console.log(this.qid);
    console.log("res after this : ");
    console.log(this.res);
    
    
    this.SolutionSheet[this.questions[this.curr_idx].quesid] = this.res.value;
    console.log(this.SolutionSheet);
    this.curr_idx = this.curr_idx + 1;
  }

  submit(){
    this.res = document.querySelector('input[name="flexRadioDefault"]:checked');
    this.qid = this.route.snapshot.params.qId;
    console.log("id after this : ");
    
    console.log(this.qid);
    console.log("res after this : ");
    console.log(this.res);
    
    
    this.SolutionSheet[this.questions[this.curr_idx].quesid] = this.res.value;
    console.log(this.SolutionSheet);
    this.rt.navigateByUrl('result', {state : {
      soln: this.SolutionSheet,
      quizId : this.qid
    }});
  }

}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
