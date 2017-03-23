import { NgZone } from '@angular/core';
import { YaObjectManager } from './../../directives/objectManager';
import { YaMapsAPIWrapper } from '../../ya-maps-api-wrapper';
import { ObjectManager } from '../../ya-maps-types';
export declare class ObjectManagerManager {
    private _mapsWrapper;
    private _zone;
    private _managers;
    constructor(_mapsWrapper: YaMapsAPIWrapper, _zone: NgZone);
    add(manager: YaObjectManager): void;
    navigateToGeoObject(manager: YaObjectManager, id: number): void;
    getNativeManager(manager: YaObjectManager): Promise<ObjectManager>;
    setFilter(manager: YaObjectManager, filter: any): void;
}
