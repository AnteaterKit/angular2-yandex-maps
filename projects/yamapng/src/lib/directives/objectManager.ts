import {
  Directive, EventEmitter, OnChanges, OnDestroy, SimpleChange,
  AfterContentInit, ContentChildren, QueryList, Input
} from '@angular/core';
import { Subscription } from 'rxjs';

import { YaMapsAPIWrapper } from '../ya-maps-api-wrapper';
import * as mapTypes from '../ya-maps-types';
import { ObjectManagerManager } from '../services/managers/objectManager-manager';

let markerId = 0;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ya-object-manager',
  providers: [
    YaMapsAPIWrapper
  ]
})

// tslint:disable-next-line:directive-class-suffix
export class YaObjectManager implements OnChanges {
  @Input() public clusterize = false;
  @Input() public datasource: any;
  @Input() public clasterPreset = 'islands#blueIcon';
  @Input() public objectPreset = 'islands#blueClusterIcons';
  @Input() public gridSize = 0;
  @Input() public selectedObjectId: number;
  @Input() public filter: any;

  private _id: string;
  private _observableSubscriptions: Subscription[] = [];
  private _addedToManger = false;

  constructor(private _manager: ObjectManagerManager) {
    this._id = (markerId++).toString();
  }

  public ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (!this._addedToManger) {

      this._manager.add(this);
      this._addedToManger = true;
      return;
    }

    if (changes['selectedObjectId']) {
      this._manager.navigateToGeoObject(this, this.selectedObjectId);
    }
    if (changes['filter']) {
      this._manager.setFilter(this, this.filter);
    }

  }
}
