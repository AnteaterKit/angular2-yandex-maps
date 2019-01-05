import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Input,
  Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { YaMapsAPIWrapper } from '../ya-maps-api-wrapper';
import { MarkerManager } from '../services/managers/marker-manager';
import { ClasterManager } from '../services/managers/claster-manager';
import { ObjectManagerManager } from '../services/managers/objectManager-manager';
import * as mapTypes from '../ya-maps-types';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ya-map',
  providers: [
    YaMapsAPIWrapper,
    MarkerManager,
    ClasterManager,
    ObjectManagerManager
  ],
  template: `
    <div class="map-container-inner" id="map" >
      <ng-content></ng-content>
    </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class YaMap implements OnInit, OnChanges {

  @Input() public longitude = 0;
  @Input() public latitude = 0;
  @Input() public zoom = 8;
  @Input() public minZoom: number;
  @Input() public maxZoom: number;
  @Input() public mapType: any = 'yandex#map';
  @Input() public controls: any[] = null;
  @Input() public panToObjects: mapTypes.PanToObjects;
  // tslint:disable-next-line:max-line-length
  @Output() public mapClick: EventEmitter<mapTypes.MapClickMouseEvent> = new EventEmitter<mapTypes.MapClickMouseEvent>();
  @Output() public actionTick: EventEmitter<mapTypes.MapClickMouseEvent> = new EventEmitter<mapTypes.MapClickMouseEvent>();

  public mapInit = false;

  private _observableSubscriptions: Subscription[] = [];

  constructor(private _elem: ElementRef, private _mapsWrapper: YaMapsAPIWrapper) { }

  public ngOnInit() {
    console.log('map iit');
    const container = this._elem.nativeElement.querySelector('.map-container-inner');
    this._initMapInstance(container);
    this.mapInit = true;
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (this.mapInit) {
      this.updatePosition(changes);
      this.panTo(changes);
    }
  }

  private _initMapInstance(el: HTMLElement) {
    if (this.controls != null) {
      this._mapsWrapper.createMap(el, {
        center: [this.latitude, this.longitude], zoom: this.zoom, type: this.mapType,
        controls: this.controls
      });

    } else {
      this._mapsWrapper.createMap(el, {
        center: [this.latitude, this.longitude], zoom: this.zoom, type: this.mapType
      });

    }

    this._handleMapMouseEvents();
  }

  private updatePosition(changes: SimpleChanges) {
    if (changes['latitude'] == null && changes['longitude'] == null) {
      return;
    }
    this._mapsWrapper.setCenter(this.latitude, this.longitude);
  }

  private panTo(changes: SimpleChanges) {
    if (changes['panToObjects'] == null) {
      return;
    }
    this._mapsWrapper.panTo(this.panToObjects.points, this.panToObjects.params);
  }

  private _handleMapMouseEvents() {
    interface Emitter {
      emit(value: any): void;
    }
    interface Event { name: string; emitter: Emitter; }

    const clickEvents: Event[] = [
      { name: 'click', emitter: this.mapClick }
    ];
    const events: Event[] = [
      { name: 'actiontick', emitter: this.actionTick }
    ];

    clickEvents.forEach((e: Event) => {
      const s = this._mapsWrapper.subscribeToMapEvent<{ latLng: any }>(e.name).subscribe(
        (event: any) => {
          const coords = event.get('coords');
          const value = { lat: coords[0], lng: coords[1] } as mapTypes.MapClickMouseEvent;
          e.emitter.emit(value);
        });
      this._observableSubscriptions.push(s);
    });

    events.forEach((e: Event) => {
      const s = this._mapsWrapper.subscribeToMapEvent<{ latLng: any }>(e.name).subscribe(
        (event: any) => {

          this._mapsWrapper.getCenter().then((coords: any) => {
            this.latitude = coords[0];
            this.longitude = coords[1];
            const value = { lat: coords[0], lng: coords[1] } as mapTypes.MapClickMouseEvent;
            e.emitter.emit(value);
          });

        });
      this._observableSubscriptions.push(s);
    });

  }
}

import { NgModule } from '@angular/core';


