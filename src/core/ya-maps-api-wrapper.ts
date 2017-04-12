import {Injectable, NgZone} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import * as mapTypes from './ya-maps-types';
import {YaMapsAPILoader} from './services/ya-maps-loader';
import {YaMarker} from './directives/marker';
import {YaClaster} from './directives/claster';
import {YaObjectManager} from './directives/objectManager';
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
     let res = this._loader.load().then(() => {
           let create = () => setTimeout(() =>  {
                  if(ymaps.Map)  {
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

  setCenter(latitude: number, longitude: number){
      this._map.then((map: mapTypes.YandexMap) => {
          map.setCenter([latitude, longitude]);
      });
  }

  getCenter(): Promise<void>{
       return this._map.then((map: mapTypes.YandexMap) => {
          return map.getCenter();
      });
  }

  panTo(points: any[], options: any[]){
    this._map.then((map: mapTypes.YandexMap) => {
            map.panTo(points, options);
        });
  }

  subscribeToMapEvent<E>(eventName: string): Observable<E> {
    return Observable.create((observer: Observer<E>) => {
      this._map.then((m: mapTypes.YandexMap) => {
        m.events.add(eventName, (arg: E) => { this._zone.run(() => observer.next(arg)); });
      });
    });
  }

  createMarker(marker: YaMarker): Promise<mapTypes.Marker> {
    return this._map.then((map: mapTypes.YandexMap) => {
        let m = new ymaps.Placemark([marker.latitude, marker.longitude], { balloonContentHeader: marker.balloonContentHeader,
                balloonContentBody: marker.balloonContentBody,
                balloonContentFooter: marker.balloonContentFooter,
                iconContent: marker.iconContent
              },
              {
                 draggable: marker.draggable,
                 preset: marker.preset
              });
        map.geoObjects.add(m);
        return m;
    });
  }

  removeGeo(overlay: any){
     this._map.then((map: mapTypes.YandexMap) => {
          map.geoObjects.remove(overlay);
      });
  }

  createClaster(claster: YaClaster): Promise<mapTypes.Claster> 
  {
      return this._map.then((map: mapTypes.YandexMap) => {
          if(claster.markers.length == 0)
                return;

            let myGeoObjects: Array<any>;
            myGeoObjects = new Array<any>();
            claster.markers.forEach((x: mapTypes.MarkerClaster) =>
            {
                let point = new ymaps.GeoObject({
                              geometry: { type: x.type, coordinates: [x.lat, x.lng] }
                          });
                myGeoObjects.push(point);
            });

            let clusterer = new ymaps.Clusterer({});
            clusterer.add(myGeoObjects);
            map.geoObjects.add(clusterer);

            return clusterer;
          });

  }

  createObjectManager(objectManager: YaObjectManager) {
      return this._map.then((map: mapTypes.YandexMap) => {
               if(objectManager.datasource.length == 0)
                      return;

                  let nativeObjectManager = new ymaps.ObjectManager({
                      clusterize: objectManager.clusterize,
                      gridSize: objectManager.gridSize
                  });

                  nativeObjectManager.add(objectManager.datasource);

                   nativeObjectManager.objects.options.set('preset', objectManager.objectPreset);
                   nativeObjectManager.clusters.options.set('preset', objectManager.clasterPreset);
                   map.geoObjects.add(nativeObjectManager);
                  return nativeObjectManager;
        });
  }

  navigateToGeoObject(objectManager: any, id: any){
      let obj = objectManager.objects.getById(id);
      if(obj)
      {
         this.setCenter(obj.geometry.coordinates[0], obj.geometry.coordinates[1]);
          objectManager.objects.balloon.open(id);
      }
  }

  checkYaSciptLoaded(){
      return this._documentRef.getNativeDocument().getElementById('YaScript');
  }

  objectManagerSetFilter(objectManager: any, filter: any) {
      console.log(objectManager);
        objectManager.setFilter(filter);
  }

}
