import { Component, OnInit } from '@angular/core';
import { EventBusService, Events } from '../services/event-bus.service';
import { EmployeeModel } from '../services/data.service';
import { Subscription } from 'rxjs';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-random-component',
  templateUrl: './random-component.component.html',
  styleUrls: ['./random-component.component.scss']
})
export class RandomComponentComponent implements OnInit {
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
