import { Component, Input, OnInit } from '@angular/core';
import { employee } from './../employee';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {


  @Input() emp  ;
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
