import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { YaBallon } from './../../directives/ballon';
import { YaMapsAPIWrapper } from '../../ya-maps-api-wrapper';
import { Ballon } from '../../ya-maps-types';
export declare class BallonManager {
    private _mapsWrapper;
    private _zone;
    private _ballons;
    constructor(_mapsWrapper: YaMapsAPIWrapper, _zone: NgZone);
    deleteMarker(marker: YaBallon): Promise<void>;
    add(ballon: YaBallon): void;
    getNativeMarker(marker: YaBallon): Promise<Ballon>;
    createEventObservable<T>(eventName: string, marker: YaBallon): Observable<T>;
}
