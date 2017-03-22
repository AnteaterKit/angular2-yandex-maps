import {Directive, EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {YaMapsAPIWrapper} from '../ya-maps-api-wrapper';
import * as mapTypes from '../ya-maps-types';
import {MarkerManager} from '../services/managers/marker-manager';
import {Marker} from '../ya-maps-types';

let markerId = 0;

@Directive({
  selector: 'ya-marker',
  providers: [
    YaMapsAPIWrapper
  ],
  inputs: [
    'latitude', 'longitude', 'balloonLayout', 'balloonContentHeader', 'balloonContentBody', 'balloonContentFooter', 
    'draggable', 'preset', 'iconContent', 'showInfo'],
  outputs: ['markerClick', 'dragEnd']
})

export class YaMarker implements OnChanges, OnDestroy {
    latitude: number;
    longitude: number;
    balloonLayout: any;
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
    draggable: boolean = false;
    preset: string = 'islands#blueIcon';
    iconContent: string;
    showInfo: boolean;

    private _markerAddedToManger: boolean = false;
    private _id: string;
    private _observableSubscriptions: Subscription[] = [];


    markerClick: EventEmitter<void> = new EventEmitter<void>();
    dragEnd: EventEmitter<mapTypes.MapMouseEvent> = new EventEmitter<mapTypes.MapMouseEvent>();

    constructor(private _markerManager: MarkerManager){
        this._id = (markerId++).toString();
    }

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    if (!this._markerAddedToManger) {

      this._markerManager.addMarker(this);
      this._markerAddedToManger = true;
      this._addEventListeners();
      return;
    }
    if(changes["showInfo"]){
        this._markerManager.showBalloon(this);
    }
  }

  private _addEventListeners() {

    // click event
    const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
      this._markerManager.showBalloon(this);
      this.markerClick.emit(null);
    });
    this._observableSubscriptions.push(cs);
    // dragend event 
    const ds = this._markerManager.createEventObservable<mapTypes.MouseEvent>('dragend', this).subscribe((e: mapTypes.MouseEvent) => {

      let thisPlacemark = e.get('target');
      let coords = thisPlacemark.geometry.getCoordinates();
      this._markerManager.getNativeMarker(this).then((m: Marker) => {
          this.dragEnd.emit(<mapTypes.MapMouseEvent>{lat: coords[0], lng: coords[1], nativeMarker: m});
      });
    });
    this._observableSubscriptions.push(ds);
  }

  ngOnDestroy() {
     this._markerManager.deleteMarker(this);
     this._observableSubscriptions.forEach((s) => s.unsubscribe());
  }
}
