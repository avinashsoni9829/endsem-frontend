import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  qId = 0;
  currQuiz : any;
  maxQns = 0;
  showfailurealert = false;
  questions: any;
  constructor(private route : ActivatedRoute , private adminService : AdminService , private routes : Router)
  {}
  
  ngOnInit(): void 
  {
        this.qId = this.route.snapshot.params.qid;
        console.log(this.qId);
        this.adminService.singleQuiz(this.qId).subscribe(
          (data) => {
                this.currQuiz = data;   
                console.log(this.currQuiz);
                this.maxQns = this.currQuiz.numberofQuestions;
                console.log("maxqns",this.maxQns);
                

          },

          (error) => {
             
          }
        )
        this.adminService.getQuestionsByQuiz(this.qId).subscribe(
          (data : any) =>{
             this.questions = data;
             console.log(this.questions);
          },
          (error) => {
             console.log(error);
             
          }
        )
  }
  toggleAlerts(){
    this.showfailurealert = false;
  }
  
  AddQns(){
    //[routerLink]="['/admin-dashboard/add-questions/' + qId]"
    console.log("Length = ",this.questions?.length);
    
    if(this.questions?.length < this.maxQns){
       this.routes.navigateByUrl('/admin-dashboard/add-questions/' + this.qId);
    }
    else
    {
        this.showfailurealert = true;

    }

  }

  update(id : any){
    

  }

  remove(id : any){
    console.log('delete clicked',id);
    this.adminService.deleteQuestions(id).subscribe(
      (data) =>{
            console.log(data);
            this.questions = this.questions.filter((q : any)=> q.quesId!=id);
            window.location.reload();
      },
      (error) => {
         console.log(error);
         
      }
    )

  }

}
