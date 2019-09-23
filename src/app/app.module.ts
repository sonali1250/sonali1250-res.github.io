import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';
import { FlipModule } from 'ngx-flip';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './location/location.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantHeadComponent } from './restaurant-head/restaurant-head.component';
import { ServerData } from './serverData.service';
import { SearchComponent } from './search/search.component';
import { InterceptorModule } from './zomatoservice.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CityDetailsComponent } from './city-details/city-details.component';


const appRoutes: Routes = [
  { path: 'home', component: LocationComponent },
  { path:'', redirectTo: 'home', pathMatch:'full' },
  { path: 'restaurant', component: RestaurantHeadComponent },
  { path: 'restaurant/details', component: RestaurantsComponent },
  { path: 'restaurant/category', component: CityDetailsComponent},
  {path: '**', pathMatch: 'full', component: NotFoundComponent},
];

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      LocationComponent,
      RestaurantsComponent,
      RestaurantHeadComponent,
      SearchComponent,
      NotFoundComponent,
      CityDetailsComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AngularFontAwesomeModule,
      InterceptorModule,
      FlipModule,
      MatInputModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
      MatAutocompleteModule,
      MatButtonModule,
      RouterModule.forRoot(appRoutes),
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyB3f9izidB71tYe1FdCkNbIgQN-2d6u6PA'
      })
    ],
    providers: [ServerData],
    bootstrap: [AppComponent]
   })
export class AppModule { }
