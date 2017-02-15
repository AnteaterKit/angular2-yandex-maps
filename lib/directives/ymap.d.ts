import { ElementRef, OnInit } from '@angular/core';
import { YaMapsAPIWrapper } from '../ya-maps-api-wrapper';
export declare class YaMap implements OnInit {
    private _elem;
    private _mapsWrapper;
    longitude: number;
    latitude: number;
    zoom: number;
    minZoom: number;
    maxZoom: number;
    constructor(_elem: ElementRef, _mapsWrapper: YaMapsAPIWrapper);
    ngOnInit(): void;
    private _initMapInstance(el);
}
