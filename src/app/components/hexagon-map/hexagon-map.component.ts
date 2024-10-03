import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-hexagon-map',
  templateUrl: './hexagon-map.component.html',
  styleUrls: ['./hexagon-map.component.scss']
})
export class HexagonMapComponent implements OnInit {
  map!: Map;

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    this.map = new Map({
      target: 'map', // ID елемента HTML, в якому буде відображатися карта
      layers: [
        new TileLayer({
          source: new OSM() // Використання OpenStreetMap для базових шарів
        })
      ],
      view: new View({
        center: [30.5234, 50.4501], // Координати центру карти (Київ)
        zoom: 10, // Початковий рівень зуму
        projection: 'EPSG:4326' // Проекція в форматі WGS84 (широта/довгота)
      })
    });
  }
}
