import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Restaurant } from '../resData';
import { Observable } from 'rxjs';
import { ServerData } from '../serverData.service';
import { Review } from '../resData';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurant_details: Observable<Restaurant>;
  restaurant_reviews: Observable<Review>;
  ans: Restaurant;
  lat;
  lng;
  constructor(private mainService: MainService, private dataService: ServerData) { }

  ngOnInit() {
    this.restaurant_details = this.mainService.todos1;
    this.restaurant_reviews = this.mainService.todosReview;
    this.lat = this.dataService.position.coords.latitude;
    this.lng = this.dataService.position.coords.longitude;
  }

}
