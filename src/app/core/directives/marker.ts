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
  ]
})
export class YaMarker //  implements OnDestroy, OnChanges, AfterContentInit 
{
    latitude: number;
    longitude: number;

    private _markerAddedToManger: boolean = false;
    private _id: string;
    private _observableSubscriptions: Subscription[] = [];

    constructor(private _markerManager: MarkerManager)
    {
        this._id = (markerId++).toString();
        console.log(this._id);
        this._markerManager.addMarker(this);
    }

 
  ngOnChanges(changes: {[key: string]: SimpleChange}) {
   
  console.log('swsw');
    if (!this._markerAddedToManger) {
      this._markerManager.addMarker(this);
      this._markerAddedToManger = true;
      return;
    }
   
  }
}