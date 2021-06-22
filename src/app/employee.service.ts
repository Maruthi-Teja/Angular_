import { Injectable } from '@angular/core';
import { employee } from './employee';


@Injectable({
  providedIn: 'root'
})   
export class EmployeeService {


  obj : employee={
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
  constructor(){ }

   getEmp(){
    return this.obj;
  }

}
