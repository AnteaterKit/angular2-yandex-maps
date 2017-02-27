import {Component, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {YaMapsAPIWrapper} from '../ya-maps-api-wrapper';
import {MarkerManager} from '../services/managers/marker-manager';
import {ClasterManager} from '../services/managers/claster-manager';
import * as mapTypes from '../ya-maps-types';

@Component({
  selector: 'ya-map',
  providers: [
    YaMapsAPIWrapper,
    MarkerManager,
    ClasterManager
  ],
  inputs: [
    'longitude', 'latitude', 'zoom', 'minZoom', 'maxZoom', 'mapType'],
     outputs: ['mapClick', 'actionTick']
    ,
  template: `
    <div class="map-container-inner" id="map" style="width: 600px; height: 400px">
      <ng-content></ng-content>
    </div>
  `
})
export class YaMap implements  OnInit, OnChanges
{

  longitude: number = 0; 
  latitude: number = 0;
  zoom: number = 8;
  minZoom: number;
  maxZoom: number;
  mapType: any = 'yandex#map';

  mapInit: boolean = false;

  private _observableSubscriptions: Subscription[] = [];

  mapClick: EventEmitter<mapTypes.MapClickMouseEvent> = new EventEmitter<mapTypes.MapClickMouseEvent>();
  actionTick: EventEmitter<mapTypes.MapClickMouseEvent> = new EventEmitter<mapTypes.MapClickMouseEvent>();

  constructor(private _elem: ElementRef, private _mapsWrapper: YaMapsAPIWrapper) {}

    ngOnInit() {
        const container = this._elem.nativeElement.querySelector('.map-container-inner');
        this._initMapInstance(container);
        this.mapInit= true;
    }

    private _initMapInstance(el: HTMLElement) {
          this._mapsWrapper.createMap(el, {center: [this.latitude, this.longitude],  zoom: this.zoom, type: this.mapType});   

          this._handleMapMouseEvents();
    }

    ngOnChanges(changes: SimpleChanges) {
       if(this.mapInit){
          this.updatePosition(changes);
       }
    }

    private updatePosition(changes: SimpleChanges) {
        if (changes['latitude'] == null && changes['longitude'] == null) {
          return;
        }
        this._mapsWrapper.setCenter(this.latitude, this.longitude);
    }

    private _handleMapMouseEvents() {
        interface Emitter {
          emit(value: any): void;
        }
        type Event = {name: string, emitter: Emitter};

        const clickEvents: Event[] = [
          {name: 'click', emitter: this.mapClick}
        ];
        const events: Event[] = [
          {name: 'actiontick', emitter: this.actionTick}
        ];

        clickEvents.forEach((e: Event) => {
          const s = this._mapsWrapper.subscribeToMapEvent<{latLng: any}>(e.name).subscribe(
              (event: any) => {
                var coords =  event.get('coords');
                const value = <mapTypes.MapClickMouseEvent>{lat: coords[0], lng: coords[1]};
                e.emitter.emit(value);
              });
          this._observableSubscriptions.push(s);
        });
      
       events.forEach((e: Event) => {
          const s = this._mapsWrapper.subscribeToMapEvent<{latLng: any}>(e.name).subscribe(
              (event: any) => {
               
                this._mapsWrapper.getCenter().then((coords: any) =>
                {
                   this.latitude = coords[0];
                   this.longitude = coords[1];
                   const value = <mapTypes.MapClickMouseEvent>{lat: coords[0], lng: coords[1]};
                   e.emitter.emit(value);
                   console.log('emit');
                });
                
              });
          this._observableSubscriptions.push(s);
        });

    }
}