import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import {Home} from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes: Home[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getHomes().subscribe(
      data => this.homes = data,
      error => console.log(error),
    );
  }

}
