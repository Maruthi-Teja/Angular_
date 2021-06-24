import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmployeeService } from './../employee.service';
import { department } from './../department';
import { ActivatedRoute } from "@angular/router";
import { empList } from './../../mock-employee';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  emp:employee ;
  empolyeeList : employee[] = empList ;
  departments = [

    { id: 1, name: "Payroll" },
    
    { id: 2, name: "Internal" },
    
    { id: 3, name: "HR" }
    
    ]
  constructor(private serivce:EmployeeService,private route : ActivatedRoute) { 
    this.emp  = serivce.getEmp();
    
  }
  readonly brdInvalid = '1px solid red'
  readonly brdValid = '1px solid green'
  log(x){
    console.log(x);
  }

  ngOnInit(): void {
     
    let employeeId = this.route.snapshot.paramMap.get('emp.id')?this.route.snapshot.paramMap.get('emp.id'):'';
    
    this.emp = this.empolyeeList[(employeeId?parseInt(employeeId)-1:'')];
    console.log(this.emp);
  }

}
