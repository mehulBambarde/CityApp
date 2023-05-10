import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from '../Models/city.model';
import { cityPost } from '../Models/cityPost.model';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  city: cityPost = {
    id: '',
    name: '',
    description: '',
  };
  cityForm!: FormGroup;


  constructor(private fb: FormBuilder, private apiService: ApiService,private router: Router
    ) { }
  ngOnInit(): void {
    this.cityForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onSubmit() {
    this.city.id = '0'
    this.apiService.createCity(this.city).subscribe(() => {
      this.router.navigate(['/cities'])
    });
  }
  

}
