import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from './person/person';

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) {
  }

  public getPeople() {
    return this.http.get<Person[]>('rest/person');
  }

  public getPersonById(id: number) {
    return this.http.get<Person>('rest/person/' + id);
  }



}