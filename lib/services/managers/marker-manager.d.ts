import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { YaMarker } from './../../directives/marker';
import { YaMapsAPIWrapper } from '../../ya-maps-api-wrapper';
import { Marker } from '../../ya-maps-types';
export declare class MarkerManager {
    private _mapsWrapper;
    private _zone;
    private _markers;
    constructor(_mapsWrapper: YaMapsAPIWrapper, _zone: NgZone);
    deleteMarker(marker: YaMarker): Promise<void>;
    addMarker(marker: YaMarker): void;
    getNativeMarker(marker: YaMarker): Promise<Marker>;
    createEventObservable<T>(eventName: string, marker: YaMarker): Observable<T>;
}
