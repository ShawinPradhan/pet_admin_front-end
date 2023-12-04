import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit{
  
constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
   this.getEmployees();
  }

  getEmployees()
  {
    this.authService.getAllEmployees().subscribe(
      data =>
      {
        this.employees = data;
      }
    );
  }

  employees: Employee[] | undefined;
  dummyArray: Employee[] | undefined;
  searchId !: string;

  viewEmployee(employeeId: string) {
    this.router.navigate(['viewEmp',employeeId]);
  }

  editEmployee(employeeId: string) {
    this.router.navigate(['editEmp',employeeId]);
  }

  search() {
    this.employees=this.dummyArray;
    if(this.searchId.length == 0) {
      this.getEmployees();  
    }

      this.employees = this.employees?.filter(e => { 
        return e.userId.includes(this.searchId);
      })  
    
  }

}
