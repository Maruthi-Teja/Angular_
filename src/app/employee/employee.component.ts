import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  emp  ;
  current_date : Date = new Date(2021,6,6);
  constructor(service:EmployeeService)
   { 
        this.emp  = service.getEmp();
   }
  ngOnInit(): void {
  }

}
