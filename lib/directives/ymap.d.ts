import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { YaMapsAPIWrapper } from '../ya-maps-api-wrapper';
import * as mapTypes from '../ya-maps-types';
export declare class YaMap implements OnInit, OnChanges {
    private _elem;
    private _mapsWrapper;
    longitude: number;
    latitude: number;
    zoom: number;
    minZoom: number;
    maxZoom: number;
    mapType: any;
    controls: any[];
    mapInit: boolean;
    private _observableSubscriptions;
    mapClick: EventEmitter<mapTypes.MapClickMouseEvent>;
    actionTick: EventEmitter<mapTypes.MapClickMouseEvent>;
    constructor(_elem: ElementRef, _mapsWrapper: YaMapsAPIWrapper);
    ngOnInit(): void;
    private _initMapInstance(el);
    ngOnChanges(changes: SimpleChanges): void;
    private updatePosition(changes);
    private _handleMapMouseEvents();
}
