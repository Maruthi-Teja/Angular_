import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm  : FormGroup ;
  valid  : boolean = true;
  login(){
    if(this.cltr('username').value==="admin"){
       this.service.login();   
    }else{
       this.service.logout();
    }
    this.valid = this.service.isLoggedIn();
  }
  constructor(private fb : FormBuilder, private service: AuthService) {

    this.loginForm = this.fb.group({
      username : [''],
      password : ['']
    })
   }
   cltr(nm: string) : FormControl{
     return this.loginForm.get(nm) as FormControl;
   }

  ngOnInit(): void {
  }

}
