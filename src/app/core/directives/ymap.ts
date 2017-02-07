import {Component, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import {YaMapsAPIWrapper} from '../ya-maps-api-wrapper';

@Component({
  selector: 'ya-map',
  providers: [
    YaMapsAPIWrapper
  ],
  template: `
    <div class="map-container-inner" id="map" style="width: 600px; height: 400px"></div>
  `
})
export class YaMap implements  OnInit
{
    constructor(private _elem: ElementRef, private _mapsWrapper: YaMapsAPIWrapper) {}

    ngOnInit() {
        const container = this._elem.nativeElement.querySelector('.map-container-inner');
       
        this._initMapInstance(container);
    }
     private _initMapInstance(el: HTMLElement) {
          console.log('_initMapInstance');
           this._mapsWrapper.createMap(el, {center: [55.76, 37.64],  zoom: 7}).
           then((x) => console.log(x))
           .catch((e) => console.log(e));
            console.log('_initMapInstance rrrr');
    }
}