import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'ymapng';

  markers: any[] = [
    {
      id: 0,
      src: 'https://www.tsum.ru/local/gulp/dist/assets/images/logo.svg',
      name: 'ЦУМ',
      lat: 55.847,
      lng: 38.6,
      balloonHeader: '22U',
      balloonBody: '<img class="page_avatar_img" src="https://www.tsum.ru/local/gulp/dist/assets/images/logo.svg" alt="Tsum" width="200" height="200">',
      balloonFooter: 'Footette',
      draggable: true,
      preset: 'islands#violetStretchyIcon',
      iconContent: 'Move me!!!',
      showInfo: false
    },
    {
      id: 1,
      src: 'http://project-volna.ru/wp-content/uploads/udf_foundry/images/logo.png',
      name: 'Volna',
      lat: 55.847,
      lng: 37.6,
      balloonHeader: '22U',
      balloonBody: '<img class="page_avatar_img" src="http://project-volna.ru/wp-content/uploads/udf_foundry/images/logo.png" alt="Volna" width="200" height="200">',
      balloonFooter: 'Footette',
      draggable: true,
      preset: 'islands#blueSportIcon',
      showInfo: false
    },
    {
      id: 2,
      src: 'http://caviarclothes.ru/wp-content/uploads/2013/06/mini-logo1.png',
      name: 'Caviarclothes',
      lat: 55.547,
      lng: 37.2,
      balloonHeader: '22U',
      balloonBody: '<img class="page_avatar_img" src="http://caviarclothes.ru/wp-content/uploads/2013/06/mini-logo1.png" width="200" height="200">',
      balloonFooter: 'Footette',
      draggable: true,
      preset: 'islands#oliveStretchyIcon',
      showInfo: false
    }
    ,
    {
      id: 3,
      src: 'http://rodinastore.ru/wp-content/themes/rodina/images/logo.png',
      name: 'Rodina',
      lat: 55.247,
      lng: 35.2,
      balloonHeader: '22U',
      balloonBody: '<img class="page_avatar_img" src="http://rodinastore.ru/wp-content/themes/rodina/images/logo.png" width="200" height="200">',
      balloonFooter: 'Footette',
      draggable: true,
      preset: 'islands#blueSportIcon',
      showInfo: false
    }
    ,
    {
      id: 4,
      src: 'https://brandshop.ru/catalog/view/theme/default/i/logo-white.png',
      name: 'Brandshop',
      lat: 55.347,
      lng: 37.0,
      balloonHeader: '22U',
      balloonBody: '<img class="page_avatar_img" src="https://brandshop.ru/catalog/view/theme/default/i/logo-white.png" width="200" height="200">',
      balloonFooter: 'Footette',
      draggable: true,
      preset: 'islands#oliveStretchyIcon',
      showInfo: false
    }
  ];

}
