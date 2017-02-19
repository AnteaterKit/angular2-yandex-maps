import { SimpleChange } from '@angular/core';
import { BallonManager } from '../services/managers/ballon-manager';
export declare class YaBallon {
    private _ballonManager;
    latitude: number;
    longitude: number;
    private _markerAddedToManger;
    private _id;
    private _observableSubscriptions;
    constructor(_ballonManager: BallonManager);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
}
