import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Adopter } from '../adopter';

@Component({
  selector: 'app-adopter-list',
  templateUrl: './adopter-list.component.html',
  styleUrls: ['./adopter-list.component.css']
})
export class AdopterListComponent {

  constructor(private authService: AuthService){}

  ngOnInit(): void {
   this.getAdopters();
  }

  getAdopters()
  {
    this.authService.getAllAdopters().subscribe(
      data =>
      {
        this.adopters = data;
      }
    );
  }

  adopters: Adopter[] | undefined;

  viewAdopter(adopterId: string) {
    
  }

  editAdopter(adopterId: string) {
    
  }

}
