import { OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { ClasterManager } from '../services/managers/claster-manager';
export declare class YaClaster implements OnChanges, OnDestroy {
    private _clasterManager;
    private _id;
    markers: any[];
    private _markerAddedToManger;
    constructor(_clasterManager: ClasterManager);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _addEventListeners();
    ngOnDestroy(): void;
}
