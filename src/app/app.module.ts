import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person.service';
import { HomeService } from './home.service';
import {routes} from './app.routing';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpClientModule,
	routes
  ],
  providers: [
  PersonService,
  HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
