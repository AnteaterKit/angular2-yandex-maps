import {Directive, EventEmitter, OnChanges, OnDestroy, SimpleChange,
  AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {YaMapsAPIWrapper} from '../ya-maps-api-wrapper';
//import * as mapTypes from '../services/yandex-maps-types';
import {MarkerManager} from '../services/managers/marker-manager';

let markerId = 0;

@Directive({
  selector: 'ya-marker',
  providers: [
    YaMapsAPIWrapper
  ],
  inputs: [
    'latitude', 'longitude', 'balloonLayout', 'balloonContentHeader', 'balloonContentBody', 'balloonContentFooter']
})
export class YaMarker implements OnChanges //  implements OnDestroy, OnChanges, AfterContentInit 
{
    latitude: number;
    longitude: number;
    balloonLayout: any;
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;

    private _markerAddedToManger: boolean = false;
    private _id: string;
    private _observableSubscriptions: Subscription[] = [];


    markerClick: EventEmitter<void> = new EventEmitter<void>();

    constructor(private _markerManager: MarkerManager)
    {
        this._id = (markerId++).toString();
        this._markerManager.addMarker(this);
    }

 
  ngOnChanges(changes: {[key: string]: SimpleChange}) {
   
    if (!this._markerAddedToManger) {
      this._markerManager.addMarker(this);
      this._markerAddedToManger = true;
      this._addEventListeners();
      return;
    }
  }

  private _addEventListeners() {
    const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
      
      this._markerManager.showBalloon(this);
      this.markerClick.emit(null);
    });
    this._observableSubscriptions.push(cs);
  }
}