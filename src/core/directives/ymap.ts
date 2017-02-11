import {Component, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import {YaMapsAPIWrapper} from '../ya-maps-api-wrapper';
import {MarkerManager} from '../services/managers/marker-manager';

@Component({
  selector: 'ya-map',
  providers: [
    YaMapsAPIWrapper,
    MarkerManager
  ],
  inputs: [
    'longitude', 'latitude', 'zoom', 'minZoom', 'maxZoom']
    ,
  template: `
    <div class="map-container-inner" id="map" style="width: 600px; height: 400px">
      <ng-content></ng-content>
    </div>
  `
})
export class YaMap implements  OnInit
{

  longitude: number = 0; 
  latitude: number = 0;
  zoom: number = 8;
  minZoom: number;
  maxZoom: number;

    constructor(private _elem: ElementRef, private _mapsWrapper: YaMapsAPIWrapper) {}

    ngOnInit() {
        const container = this._elem.nativeElement.querySelector('.map-container-inner');
       this._initMapInstance(container);
       // console.log(t);
    }
     private _initMapInstance(el: HTMLElement) {
          return this._mapsWrapper.createMap(el, {center: [this.latitude, this.longitude],  zoom: this.zoom});
            
    }
}