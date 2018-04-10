import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {ModuleWithProviders} from '@angular/core';
import {PersonDetailsComponent} from './person/person-details/person-details.component';

export const router: Routes = [
  { path: 'people', component: PersonComponent },
  { path: 'people/:id', component: PersonDetailsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);