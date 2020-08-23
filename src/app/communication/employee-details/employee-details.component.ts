import { Component, OnInit, Input } from '@angular/core';
import { EmployeeModel } from 'src/app/services/data.service';
import { EventBusService, Events } from 'src/app/services/event-bus.service';
import { Subscription } from 'rxjs';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: EmployeeModel;
  eventbusSub: Subscription;
  constructor(
    private eventbus: EventBusService,
    private observableService: ObservableService) { }

  ngOnInit() {
    //Example of using an event bus to provide loosely coupled communication (mediator pattern)
    // this.eventbusSub = this.eventbus.on(Events.EmployeeSelected, emp => (this.employee = emp));
    
    //Example of using an observable service
    this.observableService.selectedEmployee$.subscribe(
      (emp: EmployeeModel) => this.employee = emp);
  }

}
