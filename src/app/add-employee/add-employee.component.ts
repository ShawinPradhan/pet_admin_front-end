import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee: Employee = new Employee();

  constructor(private authService: AuthService, private router: Router){}

  form = new FormGroup(
    {
      name: new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(30)]),
      email:  new FormControl("",[Validators.required,Validators.email]),
      cont: new FormControl("",[Validators.required, Validators.pattern("[6789][0-9]{9}")]),
      designation: new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
      local: new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(100)]),
      city: new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
      state: new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(30)])
    }
  );

  get f()
  {
    return this.form.controls;
  }

  onSubmit()
  {
    this.authService.saveEmployee(this.employee).subscribe(
      data=>{
        console.log('SUCCESS',data);
        alert("Employee details saved successfully!!");
        this.router.navigate(['/empList']);
      }
    );
  }
}
