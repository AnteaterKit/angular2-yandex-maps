import { NgZone } from '@angular/core';
import { YaObjectManager } from './../../directives/objectManager';
import { YaMapsAPIWrapper } from '../../ya-maps-api-wrapper';
export declare class ObjectManagerManager {
    private _mapsWrapper;
    private _zone;
    private _managers;
    constructor(_mapsWrapper: YaMapsAPIWrapper, _zone: NgZone);
    add(manager: YaObjectManager): void;
}
