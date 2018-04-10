import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {ModuleWithProviders} from '@angular/core';

export const router: Routes = [
  { path: 'people', component: PersonComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);