import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../Models/city.model';
import { PointOfInterest } from '../Models/point-of-interest.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-point-of-interest',
  templateUrl: './add-point-of-interest.component.html',
  styleUrls: ['./add-point-of-interest.component.css']
})
export class AddPointOfInterestComponent implements OnInit {

  cities!: City[];
  selectedCityId!: string;
  pointOfInterest: PointOfInterest = {
    name: '',
    description: '',
    id: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getCities().subscribe((data: any) => {
      this.cities = data;
    });
  }

  onSubmit(): void {
    this.pointOfInterest.id = '0'
    this.apiService.createPointOfInterest(this.selectedCityId,this.pointOfInterest).subscribe(() => {
      this.router.navigate(['/cities/'], { queryParams: { id: this.selectedCityId } });
    });
  }

}
