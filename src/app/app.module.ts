import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YamapngModule } from 'projects/yamapng/src/public_api';
import { YaCoreModule } from 'projects/yamapng/src/lib/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YamapngModule,
    YaCoreModule.forRoot({
      apiKey: 'b9bb51c8-03a3-4722-b234-5f0e2316e94f'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
