import { SimpleChange } from '@angular/core';
import { MarkerManager } from '../services/managers/marker-manager';
export declare class YaMarker {
    private _markerManager;
    latitude: number;
    longitude: number;
    private _markerAddedToManger;
    private _id;
    private _observableSubscriptions;
    constructor(_markerManager: MarkerManager);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
}
