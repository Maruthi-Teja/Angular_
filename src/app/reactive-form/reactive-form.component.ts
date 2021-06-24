import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl ,FormGroup,Validators } from '@angular/forms';
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
departments = [

  { id: 1, name: "Payroll" },
  
  { id: 2, name: "Internal" },
  
  { id: 3, name: "HR" }
  
  ];
readonly brdInvalid = '1px solid red'
readonly brdValid = '1px solid green'
empForm : FormGroup
// empForm = new FormGroup({
//   username : new FormControl(this.emp.name,Validators.required),
//   salary   : new FormControl(this.emp.salary ,[ 
//     Validators.required,
//     Validators.min(1000)
//   ]
//     ),
//   permanent : new FormControl(''),
//   department : new FormControl('')
// });
constructor(private fb : FormBuilder) {
  this.empForm = this.fb.group({
     username : [this.emp.name , Validators.required],
     salary : [this.emp.salary,[Validators.required,Validators.min(1000)]],
     permanent : [], 
     department : [],
     skills :this.fb.array([

     ])

  })
}

dynSkills(): FormArray{
  return this.empForm.get('skills') as FormArray;
}

addSkill(){
  this.dynSkills().push(this.fb.control(''));
}

cltr(nm : string) : FormControl{
  return this.empForm.get(nm) as FormControl;
}

onSubmit(){
  console.log(this.empForm.value);
}
nameChange($event){
   this.emp.name=$event.target.value;
   console.log(this.emp.name);
}

    
  ngOnInit(): void {

  }

}
