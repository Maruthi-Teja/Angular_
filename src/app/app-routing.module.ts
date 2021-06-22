import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeeComponent } from './employee/employee.component';
import { QuantityIncreamentComponent } from './quantity-increament/quantity-increament.component';
import { QuerySelectorComponent } from './query-selector/query-selector.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [

  {path: 'view-emp', component: EmployeeComponent },
  {path :'edit-emp' , component : EditemployeeComponent},
  {path :'quantity-increment' ,component:QuantityIncreamentComponent},
  {path :'quantity-selector' ,component: QuerySelectorComponent},
  {path : 'template-form' ,component : TemplateFormComponent},
  {path : 'reactive-form' ,component : ReactiveFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
