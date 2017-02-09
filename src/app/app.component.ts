import { Component } from '@angular/core';
import { YaMap }  from './core/directives/ymap';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <div>
        <ya-map><ya-marker></ya-marker></ya-map>
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
