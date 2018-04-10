import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {HomeComponent} from './home/home.component';
import {ModuleWithProviders} from '@angular/core';
import {PersonDetailsComponent} from './person/person-details/person-details.component';

export const router: Routes = [
  { path: 'people', component: PersonComponent },
  { path: 'homes', component: HomeComponent },
  { path: 'people/:id', component: PersonDetailsComponent }
  
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);