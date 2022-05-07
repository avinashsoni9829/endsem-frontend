import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  quesid : any;
  showsuccessalert = false;
  showfailurealert = false;
  questionData : any;
  constructor(private route : ActivatedRoute, private adminService : AdminService) { }

  ngOnInit(): void {
        this.quesid = this.route.snapshot.params.quesid;
        console.log(this.quesid);

        this.questionData = this.adminService.getsinglequestion(this.quesid).subscribe(
          (data) => {
              this.questionData = data;
              console.log(this.questionData);
              
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
    this.adminService.updateQuestion(this.questionData).subscribe(
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
