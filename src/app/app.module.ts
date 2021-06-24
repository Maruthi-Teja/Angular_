import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { QuantityIncreamentComponent } from './quantity-increament/quantity-increament.component';
import { QuerySelectorComponent } from './query-selector/query-selector.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    EmployeeComponent,
    FavoriteComponent,
    EditemployeeComponent,
    QuantityIncreamentComponent,
    QuerySelectorComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    LoginComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService,
    EmployeeService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
