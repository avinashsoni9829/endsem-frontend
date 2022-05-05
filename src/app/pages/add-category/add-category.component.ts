import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm:any;
  showsuccessalert = false;
  showfailurealert = false;
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      title :  new FormControl(null),
      description : new FormControl(null)
    })
  }

  toggleAlerts(){
    this.showsuccessalert = false;
  

    this.showfailurealert = false;
  }

  onSubmit(){
    console.log(this.categoryForm.value);
    this.adminService.addCategory(this.categoryForm.value).subscribe(
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
