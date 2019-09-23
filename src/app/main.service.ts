import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResData } from './resData';
import { Review } from './resData';
import { Observable } from 'rxjs';
import { Restaurant } from './resData';
import { map } from 'rxjs/operators';
import { ServerData } from './serverData.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user-key': 'f620f59cf0b3d6e9e8b33713114b48e0'
    })
};


@Injectable({
    providedIn: 'root'
})

export class MainService {
    latitude: any;
    longitude: any;
    k: Restaurant;

    zomato_api = 'https://developers.zomato.com/api/v2.1';

    private _restList: BehaviorSubject<Array<Restaurant>> = new BehaviorSubject(null);
    public readonly todos: Observable<Array<Restaurant>> = this._restList.asObservable();

    private _restaurants: BehaviorSubject<Restaurant> = new BehaviorSubject(null);
    public readonly todos1: Observable<Restaurant> = this._restaurants.asObservable();

    private _reviews: BehaviorSubject<Review> = new BehaviorSubject(null);
    public readonly todosReview: Observable<Review> = this._reviews.asObservable();

    constructor(private httpClient: HttpClient, private dataService: ServerData) { }

    getRestList(position): Observable<Array<Restaurant>> {
    const reqUrl = this.zomato_api + '/geocode?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude ;
    const obs = this.httpClient.get<ResData>(reqUrl, httpOptions)
    .pipe(map((response: ResData) => {
        console.log(response);
        return response.nearby_restaurants;
        }
    ));

    obs.subscribe(
        res => {
            this._restList.next(res);
            console.log(res);
        });
        return obs;
    }

    getRestDetail(id): Observable<Restaurant> {
        const obs1 = this.httpClient.get<Restaurant>(this.zomato_api + '/restaurant?res_id=' + id, httpOptions).pipe(map(
            (response: Restaurant) => {
                return response;
            }
        ));
        obs1.subscribe(
            res => {
                this._restaurants.next(res);
                console.log(res);
            });
        return obs1;
    }

    getRestReviews(id): Observable<Review> {
        const revs = this.httpClient.get<Review>(this.zomato_api + '/reviews?res_id=' + id, httpOptions)
        .pipe(map(
            (response: Review) => {
                return response;
            }
        ));

        revs.subscribe(
            res => {
                this._reviews.next(res);
                console.log(res);
            });
        return revs;
    }

}
