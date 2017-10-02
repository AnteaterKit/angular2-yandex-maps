import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {YaObjectManager} from './../../directives/objectManager';
import {YaMapsAPIWrapper} from '../../ya-maps-api-wrapper';
import {ObjectManager} from '../../ya-maps-types';

@Injectable()
export class ObjectManagerManager {
  private _managers: Map<YaObjectManager, Promise<ObjectManager>> =
      new Map<YaObjectManager, Promise<ObjectManager>>();

  constructor(private _mapsWrapper: YaMapsAPIWrapper, private _zone: NgZone) {}


  add(manager: YaObjectManager) {
    const managerPromise = this._mapsWrapper.createObjectManager(manager);
    this._managers.set(manager, managerPromise);
  }

  navigateToGeoObject(manager: YaObjectManager, id: number) {
        this.getNativeManager(manager).then((p: any) => {
           this._mapsWrapper.navigateToGeoObject(p, id);
      });
       
  }

  getNativeManager(manager: YaObjectManager): Promise<ObjectManager> {
    return this._managers.get(manager);
  }

  setFilter(manager: YaObjectManager, filter: any) {
     this.getNativeManager(manager).then((p: any) => {
           this._mapsWrapper.objectManagerSetFilter(p, filter);
      });
  }

}