import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeModel } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private employeeSubject$ = new Subject<EmployeeModel>();
  
  selectedEmployee$ = this.employeeSubject$.asObservable();

  setSelectedEmployee(emp: EmployeeModel){
    this.employeeSubject$.next(emp);
  }

}
