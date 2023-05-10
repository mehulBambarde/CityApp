import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import{} from '@angular/google-maps';

@Component({
  selector: 'app-city-map',
  templateUrl: './city-map.component.html',
  styleUrls: ['./city-map.component.css']
})
export class CityMapComponent implements OnInit {
  @ViewChild('map', { static: true })
  mapElement!: ElementRef;
  @Input()
  latitude!: number;
  @Input()
  longitude!: number;

  map!: google.maps.Map;

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(this.latitude, this.longitude),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }}