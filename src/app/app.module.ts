import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdopterListComponent } from './adopter-list/adopter-list.component';
import { AddAdopterComponent } from './add-adopter/add-adopter.component';
import { ViewAdopterComponent } from './view-adopter/view-adopter.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    AddEmployeeComponent,
    FooterComponent,
    HomeComponent,
    AdopterListComponent,
    AddAdopterComponent,
    ViewAdopterComponent,
    ViewEmployeeComponent,
    AddPetComponent,
    PetListComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
