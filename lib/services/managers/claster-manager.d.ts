import { NgZone } from '@angular/core';
import { YaClaster } from './../../directives/claster';
import { YaMapsAPIWrapper } from '../../ya-maps-api-wrapper';
export declare class ClasterManager {
    private _mapsWrapper;
    private _zone;
    private _clasters;
    constructor(_mapsWrapper: YaMapsAPIWrapper, _zone: NgZone);
    addClaster(claster: YaClaster): void;
}
