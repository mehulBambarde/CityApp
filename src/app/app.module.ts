import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { AddCityComponent } from './add-city/add-city.component';
import { FormsModule } from '@angular/forms';
import { AddPointOfInterestComponent } from './add-point-of-interest/add-point-of-interest.component';
import { FilterPipe } from './FilterPipe';
import { CityMapComponent } from './city-map/city-map.component';
import { GoogleMapsModule } from '@angular/google-maps'
@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityDetailComponent,
    AddCityComponent,
    AddPointOfInterestComponent,
    FilterPipe,
    CityMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule
    
  ],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
