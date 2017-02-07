import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import * as mapTypes from './ya-maps-types';
import {YaMapsAPILoader} from './services/ya-maps-loader';

declare var ymaps: any;

@Injectable()
export class YaMapsAPIWrapper {

    private _map: Promise<mapTypes.YandexMap>;
     private _mapResolver: (value?: mapTypes.YandexMap) => void;

    constructor(private _loader: YaMapsAPILoader, private _zone: NgZone) {
    this._map =
        new Promise<mapTypes.YandexMap>((resolve: () => void) => { this._mapResolver = resolve; });
  }

  createMap(el: HTMLElement, mapOptions: mapTypes.MapOptions): Promise<void> {
    setTimeout(() => 
    {
      const map = new ymaps.Map(el, mapOptions);
        this._mapResolver(<mapTypes.YandexMap>map);
    }, 5000);
    return this._loader.load().then(() => {
        console.log('Ma');
        const map = new ymaps.Map(el, mapOptions);
        this._mapResolver(<mapTypes.YandexMap>map);
        return;
    }).catch( e => console.log(e));
  }
}