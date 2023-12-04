import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from '../pet';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {

  pet: Pet = new Pet();

  constructor( private authService: AuthService) {
  }

  form = new FormGroup(
    {
      name: new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(30)]),
      breed:  new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(30)]),
      dor: new FormControl("",[Validators.required]),
      category: new FormControl("",[Validators.required,Validators.minLength(3), Validators.maxLength(10)]),
      fund: new FormControl("",[Validators.required, Validators.min(0)])
    }
  );

  get f()
  {
    return this.form.controls;
  }


  onFileChange(event: any) {
    const file: File = event.target.files[0];
    this.pet.image = file;
  }

  onSubmit() {
    this.authService.savePet(this.pet).subscribe(
      data => {
        console.log('SUCCESS',data);
        alert("Pet details saved successfully!!");
      }
    );
  }
}
