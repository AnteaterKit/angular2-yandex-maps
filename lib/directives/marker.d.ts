import { EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { MarkerManager } from '../services/managers/marker-manager';
export declare class YaMarker implements OnChanges {
    private _markerManager;
    latitude: number;
    longitude: number;
    balloonLayout: any;
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
    private _markerAddedToManger;
    private _id;
    private _observableSubscriptions;
    markerClick: EventEmitter<void>;
    constructor(_markerManager: MarkerManager);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _addEventListeners();
}
