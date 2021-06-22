import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmployeeService } from './../employee.service';
import { department } from './../department';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  emp:employee;
  departments = [

    { id: 1, name: "Payroll" },
    
    { id: 2, name: "Internal" },
    
    { id: 3, name: "HR" }
    
    ]
  constructor(serivce:EmployeeService) { 
    this.emp  = serivce.getEmp();
    
  }
  readonly brdInvalid = '1px solid red'
  readonly brdValid = '1px solid green'
  log(x){
    console.log(x);
  }

  ngOnInit(): void {
  }

}
