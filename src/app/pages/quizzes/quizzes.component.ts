import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizlist : any;
  constructor(private adminService : AdminService) { }

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

  deleteQuiz(id : any){
    console.log('delete clicked',id);
    
    this.adminService.removeQuiz(id).subscribe(
      (data) =>{
        
        console.log(data);
        
      },
      (error) => {
        console.log(error);
        

      }
    );
  }

}
