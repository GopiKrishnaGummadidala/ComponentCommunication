import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationRoutingModule } from './communication-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@NgModule({
  imports: [
    CommonModule,
    CommunicationRoutingModule  
  ],
  declarations: [ CommunicationRoutingModule.components, EmployeeListComponent, EmployeeDetailsComponent ]
})
export class CommunicationModule { }