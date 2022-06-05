import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quizstart',
  templateUrl: './quizstart.component.html',
  styleUrls: ['./quizstart.component.css']
})
export class QuizstartComponent implements OnInit {
   qid : any;
  constructor(private route : ActivatedRoute , private r : Router) { }

  ngOnInit(): void {
   this.qid = this.route.snapshot.params.qId;
   console.log(this.qid);
    

  }
  
  start(){
     this.r.navigateByUrl('quiz-ground/'+this.qid);
     
  }
}
