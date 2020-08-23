import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeModel, DataService } from '../services/data.service';


@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html'
})
export class CommunicationComponent implements OnInit {

  employees: EmployeeModel[] = [];
  employee: EmployeeModel;

  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.getEmployees()
        .subscribe((emps: EmployeeModel[]) => this.employees = emps);
  }

  selected(emp: EmployeeModel) {
    this.employee = emp;
  }

}
