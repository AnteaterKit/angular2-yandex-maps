import {Inject, Injectable, OpaqueToken} from '@angular/core';
import {DocumentRef, WindowRef} from './../utils/browser-globals';

@Injectable()
export class YaMapsAPILoader
{
    private _scriptLoadingPromise: Promise<void>;

    private _windowRef: WindowRef;
    private _documentRef: DocumentRef;

    constructor(w: WindowRef, d: DocumentRef) {
      
        this._windowRef = w;
        this._documentRef = d;
    }

    load():  Promise<void> {
        

        const script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
       // const callbackName: string = `angular2YAMapsAPILoader`;
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';//this._getScriptSrc;//" var map = new ymaps.Map('map', { center: [55.76, 37.64],   zoom: 7 })";
      
         this._scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {
            this. get = () => { resolve(); };
           // script.onLoad = () => {resolve();};
            script.onerror = (error: Event) => { reject(); };
        });
this._documentRef.getNativeDocument().body.appendChild(script);
 
       // this._documentRef.getNativeDocument().body.appendChild(script);
     //   console.log(this._scriptLoadingPromise);
        return this._scriptLoadingPromise;
        //return new Promise((resolve, reject) => {
        //    resolve();
       // });
    }

  get()
  {}

}