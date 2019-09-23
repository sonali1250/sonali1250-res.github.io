import { Component, OnInit } from '@angular/core';
import { ServerData } from '../serverData.service';
import { MainService } from  '../main.service';
@Component({
  selector: 'app-restaurant-head',
  templateUrl: './restaurant-head.component.html',
  styleUrls: ['./restaurant-head.component.css']
})
export class RestaurantHeadComponent implements OnInit {

  restList = this.mainService.todos;

  constructor(private dataService: ServerData, private mainService: MainService) { }

  ngOnInit() {
  }

  onClick(k) {
    this.dataService.identity = k.restaurant.R.res_id;
    this.mainService.getRestDetail(this.dataService.identity);
    this.mainService.getRestReviews(this.dataService.identity);
  }
}
