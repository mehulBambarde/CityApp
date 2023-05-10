import { Pipe, PipeTransform } from '@angular/core';
import { City } from './Models/city.model';

@Pipe({
    name: 'cityFilter',
    pure: false
  })
  export class FilterPipe implements PipeTransform {

    searchText : string ='';
  
    transform(cities: City[], searchText: string): City[] {
      console.log(searchText);
      if (!cities || !searchText) {
        console.log("In here with city size:"+cities.length)
        console.log("Value of search text:"+searchText)
        return cities;
      }
      console.log("Out here")

      return cities.filter(city =>
        city.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }
  
  