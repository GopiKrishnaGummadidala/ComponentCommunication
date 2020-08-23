import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomComponentComponent } from './random-component/random-component.component';
import { CommunicationModule } from './communication/communication.module';

@NgModule({
  declarations: [
    AppComponent,
    RandomComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommunicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
