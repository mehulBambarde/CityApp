import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PointOfInterest } from '../Models/point-of-interest.model';
import { ApiService } from '../services/api.service';
import { CityMapComponent } from '../city-map/city-map.component';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city: any = {};
  pointsOfInterest!: PointOfInterest[];


  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== null) {
      this.apiService.getCityById(id).subscribe((data: any) => {
        this.city = data;
      });
      this.apiService.getPointOfInterest(id).subscribe((data: any) => {
        this.pointsOfInterest = data;
      })
    }
  }
}
