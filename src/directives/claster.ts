// tslint:disable-next-line:max-line-length
import { Directive, EventEmitter, OnChanges, OnDestroy, SimpleChange, AfterContentInit, ContentChildren, QueryList, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { YaMapsAPIWrapper } from '../ya-maps-api-wrapper';
import * as mapTypes from '../ya-maps-types';
import { ClasterManager } from '../services/managers/claster-manager';
import { Claster, MarkerClaster } from '../ya-maps-types';

let clasterId = 0;

@Directive({
    selector: 'ya-claster',
    providers: [
        YaMapsAPIWrapper
    ]
})

// tslint:disable-next-line:directive-class-suffix
export class YaClaster implements OnChanges, OnDestroy {
    @Input() public markers: any[];

    private _id: string;
    private _markerAddedToManger: boolean = false;

    constructor(private _clasterManager: ClasterManager) {
        this._id = (clasterId++).toString();
    }

    public ngOnChanges(changes: { [key: string]: SimpleChange }) {
        if (!this._markerAddedToManger) {
            this._clasterManager.addClaster(this);
        }
    }

    // tslint:disable-next-line:no-empty
    public ngOnDestroy() { }

    // tslint:disable-next-line:no-empty
    private _addEventListeners() { }
}
