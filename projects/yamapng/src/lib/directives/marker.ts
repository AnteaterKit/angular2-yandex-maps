import { Directive, EventEmitter, OnChanges, OnDestroy, SimpleChange, Input, Output } from '@angular/core';

import { YaMapsAPIWrapper } from '../ya-maps-api-wrapper';
import * as mapTypes from '../ya-maps-types';
import { MarkerManager } from '../services/managers/marker-manager';
import { Marker } from '../ya-maps-types';
import { Subscription } from 'rxjs';

let markerId = 0;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ya-marker',
  providers: [
    YaMapsAPIWrapper
  ]
})

// tslint:disable-next-line:directive-class-suffix
export class YaMarker implements OnChanges, OnDestroy {
  @Input() public latitude: number;
  @Input() public longitude: number;
  @Input() public balloonLayout: any;
  @Input() public balloonContentHeader: string;
  @Input() public balloonContentBody: string;
  @Input() public balloonContentFooter: string;
  @Input() public draggable = false;
  @Input() public preset = 'islands#blueIcon';
  @Input() public iconContent: string;
  @Input() public showInfo: boolean;
  // default#image
  @Input() public iconLayout: any;
  @Input() public iconImageHref: any;
  // [30, 42]
  @Input() public iconImageSize: any;
  // [-5, -38]
  @Input() public iconImageOffset: any;

  @Output() public markerClick: EventEmitter<void> = new EventEmitter<void>();
  // tslint:disable-next-line:max-line-length
  @Output() public dragEnd: EventEmitter<mapTypes.MapMouseEvent> = new EventEmitter<mapTypes.MapMouseEvent>();

  private _markerAddedToManger = false;
  private _id: string;
  private _observableSubscriptions: Subscription[] = [];

  constructor(private _markerManager: MarkerManager) {
    this._id = (markerId++).toString();
  }

  public ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (!this._markerAddedToManger) {

      this._markerManager.addMarker(this);
      this._markerAddedToManger = true;
      this._addEventListeners();
      return;
    }
    if (changes['showInfo']) {
      this._markerManager.showBalloon(this);
    }
  }

  public ngOnDestroy() {
    this._markerManager.deleteMarker(this);
    this._observableSubscriptions.forEach((s) => s.unsubscribe());
  }

  private _addEventListeners() {
    // click event
    const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
      this._markerManager.showBalloon(this);
      this.markerClick.emit(null);
    });
    this._observableSubscriptions.push(cs);
    // dragend event
    // tslint:disable-next-line:max-line-length
    const ds = this._markerManager.createEventObservable<mapTypes.MouseEvent>('dragend', this).subscribe((e: mapTypes.MouseEvent) => {

      const thisPlacemark = e.get('target');
      const coords = thisPlacemark.geometry.getCoordinates();
      this._markerManager.getNativeMarker(this).then((m: Marker) => {
        // tslint:disable-next-line:max-line-length
        this.dragEnd.emit({ lat: coords[0], lng: coords[1], nativeMarker: m } as mapTypes.MapMouseEvent);
      });
    });
    this._observableSubscriptions.push(ds);
  }
}
