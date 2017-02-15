import { NgZone } from '@angular/core';
import * as mapTypes from './ya-maps-types';
import { YaMapsAPILoader } from './services/ya-maps-loader';
import { YaMarker } from './directives/marker';
import { DocumentRef } from './utils/browser-globals';
export declare class YaMapsAPIWrapper {
    private _loader;
    private _zone;
    _map: Promise<mapTypes.YandexMap>;
    private _mapResolver;
    private _documentRef;
    constructor(_loader: YaMapsAPILoader, _zone: NgZone, d: DocumentRef);
    createMap(el: HTMLElement, mapOptions: mapTypes.MapOptions): Promise<void>;
    createMarker(marker: YaMarker): Promise<mapTypes.Marker>;
    checkYaSciptLoaded(): any;
}
