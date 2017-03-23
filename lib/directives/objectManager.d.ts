import { OnChanges, SimpleChange } from '@angular/core';
import { ObjectManagerManager } from '../services/managers/objectManager-manager';
export declare class YaObjectManager implements OnChanges {
    private _manager;
    clusterize: boolean;
    clasterPreset: string;
    objectPreset: string;
    gridSize: number;
    datasource: any;
    selectedObjectId: number;
    filter: any;
    private _id;
    private _observableSubscriptions;
    private _addedToManger;
    constructor(_manager: ObjectManagerManager);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
}
