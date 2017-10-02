import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {YaClaster} from './../../directives/claster';
import {YaMapsAPIWrapper} from '../../ya-maps-api-wrapper';
import {MarkerClaster, Claster} from '../../ya-maps-types';

@Injectable()
export class ClasterManager {
  private _clasters: Map<YaClaster, Promise<Claster>> =
      new Map<YaClaster, Promise<Claster>>();

  constructor(private _mapsWrapper: YaMapsAPIWrapper, private _zone: NgZone) {}


  addClaster(claster: YaClaster) {
    const clasterPromise = this._mapsWrapper.createClaster(claster);
    this._clasters.set(claster, clasterPromise);
  }

 

 /* getNativeMarker(marker: YaMarker): Promise<Marker> {
    return this._markers.get(marker);
  }

  createEventObservable<T>(eventName: string, marker: YaMarker): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this._markers.get(marker).then((m: Marker) => {
        m.events.add(eventName, (e: T) => this._zone.run(() => observer.next(e)));
      });
    });
  }
  */
}