import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{

  employee! : Employee;
  userId !: string;

  constructor(private authService: AuthService, private router: Router,private route:ActivatedRoute){}
  
  
  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.authService.getEmpById(this.userId).subscribe(
      data => { this.employee=data; }
    );
  }

  backToList()
  {
    this.router.navigate(['/empList']);
  }

  maskPassword(password: string): string {
    // Replace the password characters with asterisks (*)
    return '*'.repeat(password.length);
  }

}
