

import { Component, Input } from "@angular/core";
import { CourseService } from './courses.service';

@Component({
    selector : 'courses' ,
    template : `
    <h2>{{  title}}</h2>
    <input  [(ngModel)] = "email" (keyup.enter)="onKeyUp()" /><br>
    <button class="btn btn-primary">Button</button>
    `
})
export class CoursesComponent{

    title = "courese-list";
    email = "maruthiteja@gmail.com";
    onKeyUp(){
        console.log(this.email);
    }
}