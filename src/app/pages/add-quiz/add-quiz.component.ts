import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
 
  categories : any;
  showsuccessalert = false;
  showfailurealert = false;
  quizduration = [15,30,45,60];
  quizData = {
    title  : '',
    description : '',
    maxMarks : '',
    numberofQuestions : '',
    active : true,
    duration:'',
    image:'',
    category : {
       cid : '',
    }
  };

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService.allCategory().subscribe(
      (data) => {
         this.categories = data;
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
    console.log(this.quizData);
    this.adminService.addQuiz(this.quizData).subscribe(
     (data) => {
        console.log(data);
        this.showsuccessalert = true;
     },
     (error) => {
        console.log(error);
        this.showfailurealert = true;
     }
    
    );
  }


}
