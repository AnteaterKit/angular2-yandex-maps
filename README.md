[Angular2]: https://angular.io/

![Yandex Maps API as an Angular2 components](https://raw.githubusercontent.com/AnteaterKit/angular2-yandex-maps/master/ya-an.png)
#### Yandex Maps API as an Angular2 components

[Wiki](https://github.com/AnteaterKit/angular2-yandex-maps/wiki)

<!-- HTML CODE-->
 <a href="https://snyk.io/test/npm/angular2-yandex-maps"><img src="https://snyk.io/test/npm/angular2-yandex-maps/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/npm/angular2-yandex-maps" style="max-width:100%;"></a>
 [![npm version](https://badge.fury.io/js/angular2-yandex-maps.svg)](http://badge.fury.io/js/angular2-yandex-maps)
[![Downloads](https://img.shields.io/npm/dm/angular2-yandex-maps.svg)](https://www.npmjs.com/package/angular2-yandex-maps)


#### Live Demo Plnkr
#### Simple marker with balloon
https://plnkr.co/edit/2m3qE90MxPghI9DKjML6?p=preview
#### ngFor markers with draggable
https://plnkr.co/edit/8njMNbV9vjYTSfyP3fxI?p=preview
#### Change map position
https://plnkr.co/edit/9K1fAZbpgDDoZYUfIdVo?p=preview
#### Claster
https://plnkr.co/edit/rpJpm8FnWWsuJoScAFAN?p=preview
#### Icon Presets
https://plnkr.co/edit/dm8EJt8Waa61yKsZRRrM?p=preview

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
Style.css
```
.map-container-inner
{
   width: 300px;
   height: 200px;
}
```
