[Angular2]: https://angular.io/

![Yandex Maps API as an Angular2 components](https://raw.githubusercontent.com/AnteaterKit/angular2-yandex-maps/master/ya-an.png)
#### Yandex Maps API as an Angular2 components

[Wiki](https://github.com/AnteaterKit/angular2-yandex-maps/wiki)

<!-- HTML CODE-->
 <a href="https://snyk.io/test/npm/yamapng"><img src="https://snyk.io/test/npm/yamapng/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/npm/yamapng" style="max-width:100%;"></a>
 [![npm version](https://badge.fury.io/js/yamapng.svg)](http://badge.fury.io/js/yamapng)
[![Downloads](https://img.shields.io/npm/dm/angular2-yandex-maps.svg)](https://www.npmjs.com/package/yamapng)


#### Live Demo Plnkr
#### Добавление маркеров admin panel
https://plnkr.co/edit/djaxM0nKECMynWLJwmjO?p=preview
#### Работа с большим числом объектов через ObjectManager
https://plnkr.co/edit/mq8VzzINPYXOInPOS2mQ?p=preview
#### Простая метка с balloon
https://plnkr.co/edit/2m3qE90MxPghI9DKjML6?p=preview
#### ngFor метки draggable
https://plnkr.co/edit/8njMNbV9vjYTSfyP3fxI?p=preview
#### Изменение позиций карты
https://plnkr.co/edit/9K1fAZbpgDDoZYUfIdVo?p=preview
#### Кластеры
https://plnkr.co/edit/rpJpm8FnWWsuJoScAFAN?p=preview
#### Изменение иконок
https://plnkr.co/edit/dm8EJt8Waa61yKsZRRrM?p=preview

#### Install
```bash 
npm i yamapng
```

#### imports
```
 @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YamapngModule,
    YaCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
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
