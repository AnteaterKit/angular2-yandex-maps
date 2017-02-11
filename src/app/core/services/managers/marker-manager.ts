import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {YaMarker} from './../../directives/marker';

import {YaMapsAPIWrapper} from '../../ya-maps-api-wrapper';
import {Marker} from '../../ya-maps-types';

@Injectable()
export class MarkerManager {
  private _markers: Map<YaMarker, Promise<Marker>> =
      new Map<YaMarker, Promise<Marker>>();

  constructor(private _mapsWrapper: YaMapsAPIWrapper, private _zone: NgZone) {}

  deleteMarker(marker: YaMarker): Promise<void> {
    const m = this._markers.get(marker);
    if (m == null) {
      // marker already deleted
      return Promise.resolve();
    }
    return m.then((m: Marker) => {
      return this._zone.run(() => {
        m.setMap(null);
        this._markers.delete(marker);
      });
    });
  }

  addMarker(marker: YaMarker) {
    const markerPromise = this._mapsWrapper.createMarker(marker);
    this._markers.set(marker, markerPromise);
  }

  getNativeMarker(marker: YaMarker): Promise<Marker> {
    return this._markers.get(marker);
  }

  createEventObservable<T>(eventName: string, marker: YaMarker): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this._markers.get(marker).then((m: Marker) => {
        m.addListener(eventName, (e: T) => this._zone.run(() => observer.next(e)));
      });
    });
  }
}