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
        script.async = false;
        script.defer = true;
        script.id = 'YaScript';
        const callbackName: string = `angular2YAMapsAPILoader`;
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&callback=angular2YAMapsAPILoader';
         
        this._scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {
            script.onload = () => {resolve();};
            script.onerror = (error: Event) => { reject(); };
        });
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    }

}