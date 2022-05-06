import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizlist : any;
  constructor(private adminService : AdminService , private router : Router) { }

  ngOnInit(): void {
    this.adminService.allQuiz().subscribe(
      (data) => {
         this.quizlist = data;
         console.log(this.quizlist);
         
      },
      (error) => {
         console.log(error);
         
      }
    )
  }

  addQuiz(){
    console.log("ffj");
    
      this.router.navigateByUrl('/admin-dashboard/add-quiz');
  }

  deleteQuiz(id : any){
    console.log('delete clicked',id);
    this.adminService.removeQuiz(id).subscribe(
      (data) =>{
            console.log(data);
            this.quizlist = this.quizlist.filter((q : any)=> q.qId!=id);
      },
      (error) => {
         console.log(error);
         
      }
    )

   
  }


}
