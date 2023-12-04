import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent {

  constructor(private authService: AuthService){}

  ngOnInit(): void {
   this.getPet();
  }

  getPet()
  {
    this.authService.getAllPets().subscribe(
      data =>
      {
        this.pets = data;
      }
    );
  }

  pets: Pet[] | undefined;

  viewPet(petId: string) {
    
  }

  editPet(petId: string) {
    
  }
}
