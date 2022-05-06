import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  qId = 0;
  constructor(private route : ActivatedRoute)
  {}
  
  ngOnInit(): void 
  {
        
  }

}
