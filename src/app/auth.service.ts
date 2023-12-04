import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { Adopter } from './adopter';
import { Pet } from './pet';

const URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  saveEmployee(emp: Employee): Observable<Object>
  {
    return this.http.post<any>(URL+'saveEmployee',emp);
  }

  getAllEmployees(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(URL+'getAllEmployees');
  }

  getAllAdopters(): Observable<Adopter[]>
  {
    return this.http.get<Adopter[]>(URL+'getAllAdopters');
  }

  saveAdopter(adopter: Adopter): Observable<Object>
  {
    return this.http.post<any>(URL+'saveAdopter',adopter);
  }

  getEmpById(userId: string): Observable<Employee>
  {
    return this.http.get<Employee>(`${URL}getEmployeeById/${userId}`)
  }

  savePet(pet: Pet): Observable<any> {
    return this.http.post<any>(URL+'savePet', pet);
  }

  getAllPets(): Observable<Pet[]>
  {
    return this.http.get<Pet[]>(URL+'getAllPet');
  }

  updateEmp(userId: string, emp: Employee): Observable<Object>
  {
    return this.http.put<any>(`${URL}updateEmployee/${userId}`,emp);
  }
}
