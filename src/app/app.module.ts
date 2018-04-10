import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person.service';
import {routes} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpClientModule,
	routes
  ],
  providers: [
  PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
