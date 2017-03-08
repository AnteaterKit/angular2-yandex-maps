import {Directive, EventEmitter, OnChanges, OnDestroy, SimpleChange,
  AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {YaMapsAPIWrapper} from '../ya-maps-api-wrapper';
import * as mapTypes from '../ya-maps-types';
import {ObjectManagerManager} from '../services/managers/objectManager-manager';


let markerId = 0;

@Directive({
  selector: 'ya-object-manager',
  providers: [
    YaMapsAPIWrapper
  ],
  inputs: [ 'clusterize', 'datasource', 'clasterPreset', 'objectPreset', 'gridSize']
})
export class YaObjectManager //implements OnChanges, OnDestroy  
{
    clusterize: boolean = false;
    clasterPreset: string = 'islands#blueIcon';
    objectPreset: string = 'islands#blueClusterIcons';
    gridSize: number = 0;
    datasource: any;

    private _id: string;
    private _observableSubscriptions: Subscription[] = [];
    private _addedToManger: boolean = false;

    //markerClick: EventEmitter<void> = new EventEmitter<void>();
    //dragEnd: EventEmitter<mapTypes.MapMouseEvent> = new EventEmitter<mapTypes.MapMouseEvent>();

    constructor(private _manager: ObjectManagerManager)
    {
        this._id = (markerId++).toString();
    }

 
  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    if (!this._addedToManger) {

      this._manager.add(this);
      this._addedToManger = true;
     // this._addEventListeners();
      return;
    }
  }

  /*private _addEventListeners() {

    //click event
    const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
      
      this._markerManager.showBalloon(this);
      this.markerClick.emit(null);
    });
    this._observableSubscriptions.push(cs);

    //dragend event 
    const ds = this._markerManager.createEventObservable<mapTypes.MouseEvent>('dragend', this).subscribe((e: mapTypes.MouseEvent) => {

      var thisPlacemark = e.get('target');
      var coords = thisPlacemark.geometry.getCoordinates();
      this._markerManager.getNativeMarker(this).then((m: Marker)=>
      {
          this.dragEnd.emit(<mapTypes.MapMouseEvent>{lat: coords[0], lng: coords[1], nativeMarker: m});
      });
    });
    this._observableSubscriptions.push(ds);
  }

  ngOnDestroy() {
   console.log('destroy');
  }*/
}