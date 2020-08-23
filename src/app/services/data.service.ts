import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface EmployeeModel {
    id: number;
    name: string;
    city: string;
    age: number;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  employees: EmployeeModel[] = [
    {
      id: 1,
      name: 'Gopi',
      city: 'hamburg',
      age: 25
    },
    {
      id: 2,
      name: 'Ram',
      city: 'Seattle',
      age: 30
    },
    {
      id: 3,
      name: 'Lalith',
      city: 'Orlando',
      age: 22
    }
  ];


  constructor() { }

  getEmployees() : Observable<EmployeeModel[]> {
    return of(this.employees);
  }

}
