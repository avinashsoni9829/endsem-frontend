import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  allCategory : any;
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.adminService.allCategory().subscribe(data => {
      this.allCategory = data;
      console.log(this.allCategory);
      
   })
  }

}
