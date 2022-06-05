import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})





export class QuizPageComponent implements OnInit 
{
  qid : any;
  questions : any;
  points = 0;
  curr_idx = 0;
  ans : any;
  response : any;
  res:any;
  maxscore :any;
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
