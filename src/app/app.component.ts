import { Component } from '@angular/core';
import { YaMap }  from './core/directives/ymap';

@Component({
  selector: 'my-app',
  template: `<h1>Yandex map</h1>
    <div>
        <ya-map [latitude]="55.76" [longitude]="37.64">
          <ya-marker [latitude]="55.847" [longitude]="38.6">
          </ya-marker>
           <ya-marker [latitude]="55.847" [longitude]="35.6">
          </ya-marker>
        </ya-map>
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
