import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from './person.model';

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

  public createPerson(person) {
    const _http = new HttpHeaders();
    const hhttp = _http.append('Content-Type', 'application/json');
    const options =  {
      http: http
    };
    return this.http.post<Person>('rest/person', person, options);
  }

}