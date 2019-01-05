import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

import { YaMarker } from './../../directives/marker';

import { YaMapsAPIWrapper } from '../../ya-maps-api-wrapper';
import { Marker } from '../../ya-maps-types';

@Injectable()
export class MarkerManager {
  private _markers: Map<YaMarker, Promise<Marker>> =
  new Map<YaMarker, Promise<Marker>>();

  constructor(private _mapsWrapper: YaMapsAPIWrapper, private _zone: NgZone) { }

  public deleteMarker(marker: YaMarker): Promise<void> {
    const m = this._markers.get(marker);
    if (m == null) {
      return Promise.resolve();
    }
    // tslint:disable-next-line:no-shadowed-variable
    return m.then((m: Marker) => {
      return this._zone.run(() => {
        // tslint:disable-next-line:no-shadowed-variable
        this.getNativeMarker(marker).then((m: Marker) => {
          this._mapsWrapper.removeGeo(m);
          this._markers.delete(marker);
        });
      });
    });
  }

  public addMarker(marker: YaMarker) {
    const markerPromise = this._mapsWrapper.createMarker(marker);
    this._markers.set(marker, markerPromise);
  }

  public showBalloon(marker: YaMarker) {
    this.getNativeMarker(marker).then((m: Marker) => {
      m.balloon.open();
    });

  }

  public getNativeMarker(marker: YaMarker): Promise<Marker> {
    return this._markers.get(marker);
  }

  public createEventObservable<T>(eventName: string, marker: YaMarker): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this._markers.get(marker).then((m: Marker) => {
        m.events.add(eventName, (e: T) => this._zone.run(() => observer.next(e)));
      });
    });
  }
}
