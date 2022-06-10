import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
   score : any;
   scoresheet : any;
   quizId : any;
   quizDetails : any;
   totalscore  = 0;
   maxscore : any;
   mxscr = 0;
   noq  = 0;
   payload   = 0;
  constructor(private route : Router , private adminService : AdminService) {
      
      this.score = this.route.getCurrentNavigation()?.extras.state;
      console.log(this.score);
      this.scoresheet = this.score.soln;
      this.quizId = this.score.quizId;
      
      
      
      
      
   }

  ngOnInit(): void {
    
    this.adminService.singleQuiz(this.quizId).subscribe((data) =>{
      this.maxscore = data;
    
      this.noq = this.maxscore.numberofQuestions;
      this.mxscr = this.maxscore.maxMarks;
     
 
     
    },
    (error : any) =>{
      console.log(error);
      
    }
    )



    this.adminService.getQuestionsByQuiz(this.quizId).subscribe((data) => {
      this.quizDetails = data;
      console.log("quizDetails = ",this.quizDetails);
      
      
      this.payload = this.mxscr/this.noq;
    
      
      this.quizDetails.forEach((x : any) => {
      
        if(this.scoresheet[x.quesid] == x.answer){
          this.totalscore = +this.totalscore + this.payload;
        }
      });
      
      

    },
    (error : any) => {
      console.log("error");
      
    }
    
    )


    
  }

}
