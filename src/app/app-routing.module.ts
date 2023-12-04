import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdopterListComponent } from './adopter-list/adopter-list.component';
import { AddAdopterComponent } from './add-adopter/add-adopter.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {path: 'empList', component: EmpListComponent},
  {path: 'home', component: HomeComponent},
  {path:'add-employee', component:AddEmployeeComponent},
  {path:'adopterList', component:AdopterListComponent},
  {path:'add-adopter', component:AddAdopterComponent},
  {path:'viewEmp/:userId', component:ViewEmployeeComponent},
  {path:'add-pet', component:AddPetComponent},
  {path:'petList', component:PetListComponent},
  {path:'editEmp/:id', component:EditEmployeeComponent},
  {path:'', redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
