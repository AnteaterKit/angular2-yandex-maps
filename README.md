[Angular2]: https://angular.io/

#### Angular2 maps 

Yandex Maps API as an Angular2 direcitive.


#### Libe Demo Plnkr
#### Simple marker with balloon
https://plnkr.co/edit/2m3qE90MxPghI9DKjML6?p=preview
#### ngFor markers with draggable
https://plnkr.co/edit/8njMNbV9vjYTSfyP3fxI

#### Install
```bash 
npm install angular2-yandex-maps
```

#### Systemjs.config.js
```js

(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      ....
      'angular2-yandex-maps': 'npm:angular2-yandex-maps'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
      ...........
       'angular2-yandex-maps': 
       {
         main: './index.js',
         defaultExtension: 'js'
       }
    }
  });
})(this);
```

### API

#### Тег ya-map & ya-marker:
```html
 <ya-map [latitude]="55.76" [longitude]="37.64">
          <ya-marker [latitude]="55.847" [longitude]="38.6">
          </ya-marker>
           <ya-marker [latitude]="55.847" [longitude]="35.6">
          </ya-marker>
 </ya-map>
```
