import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  showsuccessalert = false;
  showfailurealert = false;
  quizzes : any;
  questionData = {
    question : '',
    image : '',
    option1 : '',
    option2 : '',
    option3 : '',
    option4 : '',
    answer : '',
    quiz : {
      qId : '',
    }
  };

  constructor(private adminService: AdminService , private route : ActivatedRoute) { }

  ngOnInit(): void {
      this.questionData.quiz.qId = this.route.snapshot.params.qid;
     
      this.adminService.allQuiz().subscribe(
       (data) => {
          this.quizzes = data;
          console.log(this.quizzes);
          
       },
       (error) => {
          console.log(error);
          
       }
     )
  }

  toggleAlerts(){
    this.showsuccessalert = false;
  

    this.showfailurealert = false;
  }

  onSubmit(){
    console.log(this.questionData);
    this.adminService.addQuestions(this.questionData).subscribe(
      (data) => {
         console.log(data);
         this.showsuccessalert = true;
         
      },
      (error) => {
         console.log(error);
         this.showfailurealert = true;
         
      }

    )
  }

}
