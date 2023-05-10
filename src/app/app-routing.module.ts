import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { AddCityComponent } from './add-city/add-city.component';
import { AddPointOfInterestComponent } from './add-point-of-interest/add-point-of-interest.component';

const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CityListComponent },
  { path: 'cities/:id', component: CityDetailComponent },
  { path: 'add-city', component: AddCityComponent } ,
  { path: 'add-point-of-interest', component: AddPointOfInterestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
