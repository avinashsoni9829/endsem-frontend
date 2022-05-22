import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route : ActivatedRoute , private adminService : AdminService) { }

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
    this.curr_idx = this.curr_idx - 1;
  }

  add(){
    this.curr_idx = this.curr_idx + 1;
  }

}
