import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Icon, icon, LatLngExpression, Map, marker, tileLayer} from 'leaflet';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapContainerComponent {

  map?: Map;

  center: LatLngExpression = [55.7887, 49.1221];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 13,
    zoomControl: false,
    center: this.center
  };

  markerIcon = icon({
    ...Icon.Default.prototype.options,
    iconUrl: 'assets/marker-icon.png',
    iconRetinaUrl: 'assets/marker-icon-2x.png',
    shadowUrl: 'assets/marker-shadow.png',
  });

  onMapReady(map: Map) {
    this.map = map;
    this.initPopup();
  }

  initPopup() {
    if (this.map) {
      marker(this.center, {icon: this.markerIcon})
        .addTo(this.map)
        .bindPopup('Ecorus', {})
        .openPopup();
    }
  }
}

