import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  userId!: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}
 
 
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.authService.getEmpById(this.userId).subscribe(
      data =>
      {
        this.employee = data;
      }
    );
  }



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
  this.authService.updateEmp(this.userId, this.employee).subscribe(
    data =>
    {
      console.log("SUCCESS");
      alert("Employee with id "+this.userId+" updated successfully!");
      this.router.navigate(['empList']);
    }

  );
}

}
