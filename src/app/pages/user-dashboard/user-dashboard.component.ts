import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
   listofQuizzes:any;
  constructor(private adminService:AdminService , private route : Router) { }

  ngOnInit(): void {
    this.adminService.allQuiz().subscribe(
      (data) => {
         this.listofQuizzes = data;
         console.log(this.listofQuizzes);
         
      },
      (error) => {
         console.log(error);
         
      }
    )
  }
  quizHelper(id : any){
    console.log("nfnnf");
    console.log(id);
    
    this.route.navigateByUrl('quiz-home/' + id);
    
  }

}
