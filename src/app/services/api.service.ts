import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl = 'https://localhost:7252/api/cities'; // Replace with your API endpoint base URL

  constructor(private http: HttpClient) { }
  getCities() {
    return this.http.get(`${this.apiBaseUrl}/`);
  }
  
  getCityById(id: string) {
    return this.http.get(`${this.apiBaseUrl}/${id}`);
  }

  getPointOfInterest(id:string){
    return this.http.get(`${this.apiBaseUrl}/${id}/pointofinterest`);
  }

  createCity(cityData: any) {
    return this.http.post(`${this.apiBaseUrl}`, cityData);
  }

  createPointOfInterest(id:string,poiData: any) {
    return this.http.post(`${this.apiBaseUrl}/${id}/pointofinterest/addcity`, poiData);
  }

  addCity(city: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/cities`, city);
  }

}
