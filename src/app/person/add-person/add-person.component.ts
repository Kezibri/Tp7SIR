import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Person} from '../person';
import {PersonService} from '../../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person = {};

  constructor(public location: Location, private personService: PersonService) { }

  ngOnInit() {
  }

  save() {
    this.personService.createPerson(this.person).toPromise().catch(e => console.log(e));
    this.location.back();
  }
}