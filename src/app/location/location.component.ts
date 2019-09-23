import { Component, OnInit } from '@angular/core';
import { ServerData } from '../serverData.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  currentLat: any;
  currentLong: any;
  asyncResult:any;

  constructor(
    private dataService: ServerData,
    private mainService: MainService) { }

  ngOnInit() {
  }

  onLocation()
  {
  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.showPos(position);
          this.dataService.position = position;
          this.mainService.getRestList(position);
        });
      } else {
        alert('Browser not supporting Geolocation.');
      }
  }

showPos(position) {
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;
  this.dataService.latitude = position.coords.latitude;
  this.dataService.longitude = position.coords.longitude;
}

}
