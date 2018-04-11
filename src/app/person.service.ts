import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from './person/person';
import {Home} from './home/home';

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
  
  public getPersonHomes(id: number) {
    return this.http.get<Home[]>('rest/person/' + id + '/homes');
  }
  
  public createPerson(person) {
    const _headers = new HttpHeaders();
    const headers = _headers.append('Content-Type', 'application/json');
    const options =  {
      headers: headers
    };
    return this.http.post<Person>('rest/person', person, options);
  }
  
}