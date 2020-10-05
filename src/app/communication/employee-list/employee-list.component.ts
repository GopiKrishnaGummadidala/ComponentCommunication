import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeModel } from 'src/app/services/data.service';
import { EventBusService, EmitEvent, Events } from 'src/app/services/event-bus.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  @Input() employees: EmployeeModel[] =[];
  @Output() public employeeEmiiter: EventEmitter<EmployeeModel> = new EventEmitter();
  constructor(
    private eventbus: EventBusService,
    private observableService: ObservableService
    ) { }

  selectEmployee(emp: EmployeeModel) {
    // this.observableService.setSelectedEmployee(emp);
    // this.eventbus.emit(new EmitEvent(Events.EmployeeSelected, emp));
    this.employeeEmiiter.emit(emp);
  }

}
