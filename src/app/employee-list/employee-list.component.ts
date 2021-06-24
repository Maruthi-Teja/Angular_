import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { department } from '../department';
import { Skill } from '../skill';
import { empList } from './../../mock-employee';
import { CourseService } from './../courses.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


   searchKey : string ="maruthi";
  employeeList : employee[]  = empList;
  filteredEmployees : employee[] = [] ;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(){
    this.filteredEmployees =[];
    // this.filteredEmployees= this.employeeList.filter(this.filtering)
    for(let x of this.employeeList){
      
      if(x.name.startsWith(this.searchKey)){
        this.filteredEmployees.push(x);
      }
    }
  }

  // function to filter the employee names based on the text provided in the search field
  // filtering(x:employee) : boolean {
  // if(x.name.startsWith(this.searchKey)){
  //   return true;
  // }
  // return false;
  // }

}
