import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup,Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { employee } from '../employee';
import { EmployeeService } from './../employee.service';
import { department } from './../department';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() {
  }

  emp: employee={
    "id"     : 123,
     "name"  : "maruthi",
    "permanent" : false,
    "salary" : 12000,
    "department" :{
        "id" : 3,
        "name" : "payroll"
    },
    "skills" : [
        {
            "id" : 1,
            "name" : "dancing"
        },{
            "id" : 2,
            "name" : "singing"
        }
    ]
};

empForm = new FormGroup({
  username : new FormControl(this.emp.name,Validators.required)
});
get username(){
 
  return this.empForm.get('username');
  
}


    
  ngOnInit(): void {

  }

}
