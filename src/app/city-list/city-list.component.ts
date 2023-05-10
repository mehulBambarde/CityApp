import { Component, OnInit, SimpleChanges } from '@angular/core';
import { City } from '../Models/city.model';
import { ApiService } from '../services/api.service';
import { FilterPipe } from '../FilterPipe';
@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})




export class CityListComponent implements OnInit {

  cities!: City[];
  searchText: string ="";
  filteredCities!: City[];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCities().subscribe((data: any) => {
      this.cities = data;
     // this.filteredCities = data;
     // this.filterCities();
      console.log(data)
    });
  }

 /* filterCities(): void {
    console.log("callong filter")
    this.filteredCities = this.cities.filter((city) => {
      return city.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }*/
  

  createCity(cityData: any) {
    this.apiService.createCity(cityData).subscribe((data: any) => {
      this.cities.push(data);
    });
  }

   /* ngOnChanges(): void {
    console.log("changes")
    this.filterCities();
  }*/
  

}
