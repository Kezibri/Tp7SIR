import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person.service';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
    HttpClientModule
  ],
  providers: [
  PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
