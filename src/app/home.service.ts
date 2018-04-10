import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Home} from './home/home';


@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {
  }

  public getHomes() {
    return this.http.get<Home[]>('rest/home');
  }

  public getHome(id: number) {
    return this.http.get<Home>('rest/home/' + id);
  }

}