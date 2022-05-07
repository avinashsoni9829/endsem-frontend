import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
   qId = 0;
   qd : any;
   categories : any; 
  
  showsuccessalert = false;
  showfailurealert = false;

  quizData = {
    title  : '',
    description : '',
    maxMarks : '',
    numberofQuestions : '',
    active : true,
    category : {
       cid : '',
    }
  };
   
  constructor(private route : ActivatedRoute , private adminService : AdminService) { }

  ngOnInit(): void {
      this.qId = this.route.snapshot.params.qid;
      console.log(this.qId);

      this.adminService.singleQuiz(this.qId).subscribe(
        (data) => {
           this.qd = data;
           console.log(this.quizData);
           
        },
        (error) => {
           console.log(error);
           
        }
      )
      

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
    console.log(this.qd);
    this.adminService.updQuiz(this.qd).subscribe(
      (data) => {
        console.log("ndnnd");
        

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
