import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { YaClasterDirective } from './../../directives/claster.directive';
import { YaMapsAPIWrapper } from '../../ya-maps-api-wrapper';
import { MarkerClaster, Claster } from '../../ya-maps-types';

@Injectable()
export class ClasterManager {
  private _clasters: Map<YaClasterDirective, Promise<Claster>> =
  new Map<YaClasterDirective, Promise<Claster>>();

  constructor(private _mapsWrapper: YaMapsAPIWrapper, private _zone: NgZone) { }

  public addClaster(claster: YaClasterDirective) {
    const clasterPromise = this._mapsWrapper.createClaster(claster);
    this._clasters.set(claster, clasterPromise);
  }

  /* getNativeMarker(marker: YaMarkerDirective): Promise<Marker> {
     return this._markers.get(marker);
   }

   createEventObservable<T>(eventName: string, marker: YaMarkerDirectives): Observable<T> {
     return Observable.create((observer: Observer<T>) => {
       this._markers.get(marker).then((m: Marker) => {
         m.events.add(eventName, (e: T) => this._zone.run(() => observer.next(e)));
       });
     });
   }
   */
}
