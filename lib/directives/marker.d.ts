import { EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import * as mapTypes from '../ya-maps-types';
import { MarkerManager } from '../services/managers/marker-manager';
export declare class YaMarker implements OnChanges, OnDestroy {
    private _markerManager;
    latitude: number;
    longitude: number;
    balloonLayout: any;
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
    draggable: boolean;
    private _markerAddedToManger;
    private _id;
    private _observableSubscriptions;
    markerClick: EventEmitter<void>;
    dragEnd: EventEmitter<mapTypes.MapMouseEvent>;
    constructor(_markerManager: MarkerManager);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _addEventListeners();
    ngOnDestroy(): void;
}
