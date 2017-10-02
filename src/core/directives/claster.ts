import {Directive, EventEmitter, OnChanges, OnDestroy, SimpleChange,
  AfterContentInit, ContentChildren, QueryList} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {YaMapsAPIWrapper} from '../ya-maps-api-wrapper';
import * as mapTypes from '../ya-maps-types';
import {ClasterManager} from '../services/managers/claster-manager';
import {Claster, MarkerClaster} from '../ya-maps-types';

let clasterId = 0;

@Directive({
  selector: 'ya-claster',
  providers: [
    YaMapsAPIWrapper
  ],
  inputs: ['markers']
})
export class YaClaster implements OnChanges, OnDestroy  
{
    private _id: string;
    markers: any[];

    private _markerAddedToManger: boolean = false;

    constructor(private _clasterManager: ClasterManager)
    {
        this._id = (clasterId++).toString();
    } 
    ngOnChanges(changes: {[key: string]: SimpleChange}) {
        if(!this._markerAddedToManger)
        {
            this._clasterManager.addClaster(this);
        }
    }

    private _addEventListeners() {

    
    }

    ngOnDestroy() {
    
  }
}