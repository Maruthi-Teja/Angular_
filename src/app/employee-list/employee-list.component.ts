import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { department } from '../department';
import { Skill } from '../skill';
import { empList } from './../../mock-employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {



  employeeList : employee[]  = empList;

  constructor() { }

  ngOnInit(): void {
  }

}
