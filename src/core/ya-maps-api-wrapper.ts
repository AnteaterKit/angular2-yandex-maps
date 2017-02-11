import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import * as mapTypes from './ya-maps-types';
import {YaMapsAPILoader} from './services/ya-maps-loader';
import {YaMarker} from './directives/marker';
import {DocumentRef, WindowRef} from './utils/browser-globals';

declare var ymaps: any;

@Injectable()
export class YaMapsAPIWrapper {

    
    _map: Promise<mapTypes.YandexMap>;
    private _mapResolver: (value?: mapTypes.YandexMap) => void;
    private _documentRef: DocumentRef;
    
     constructor(private _loader: YaMapsAPILoader, private _zone: NgZone,  d: DocumentRef) {
       this._documentRef = d;
       this._map =  new Promise<mapTypes.YandexMap>((resolve: () => void) => { this._mapResolver = resolve; });
    }

  createMap(el: HTMLElement, mapOptions: mapTypes.MapOptions): Promise<void> {
  
     var res = this._loader.load().then(() => {
           let create = () => setTimeout(() => 
                {
                  if(ymaps.Map)
                  {
                    const map = new ymaps.Map(el, mapOptions);
                    this._mapResolver(<mapTypes.YandexMap>map);
                  }
                  else{
                    create();
                  }
                }, 100);
            create();
       
      }).catch(e => console.log(e));
      return res;
  }

  createMarker(marker: YaMarker): Promise<mapTypes.Marker> {
    return this._map.then((map: mapTypes.YandexMap) => {
        var m = new ymaps.Placemark([marker.latitude, marker.longitude], {});
          map.geoObjects.add(m);
        return m;
    });
  }

  checkYaSciptLoaded()
  {
      return this._documentRef.getNativeDocument().getElementById('YaScript');
  }
  
}