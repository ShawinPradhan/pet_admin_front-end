import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Adopter } from '../adopter';

@Component({
  selector: 'app-add-adopter',
  templateUrl: './add-adopter.component.html',
  styleUrls: ['./add-adopter.component.css']
})
export class AddAdopterComponent {

adopter: Adopter = new Adopter();

  constructor(private authService: AuthService, private router: Router){}

  form = new FormGroup(
    {
      name: new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(30)]),
      email:  new FormControl("",[Validators.required,Validators.email]),
      cont: new FormControl("",[Validators.required, Validators.pattern("[6789][0-9]{9}")]),
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
    this.authService.saveAdopter(this.adopter).subscribe(
      data=>{
        console.log('SUCCESS',data);
        alert("Adopter details saved successfully!!");
        this.router.navigate(['/adopterList']);
      }
    );
  }
}
