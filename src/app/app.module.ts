import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AppComponent
} from './app.component';
import {
  analyticService
} from './services/analatic'
import {
  AnalyticsImplementation
} from './Model/AnalyticsImplementation'
import {
  Metric
} from './Model/Metric';
import{ HttpClientModule} from '@angular/common/http'

import { Reporters } from './services/Reporters';
import { reporter1 } from './services/report1';
import { reporter2 } from './services/Report2';
import { httpCall} from './services/httpTest';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
      provide: analyticService,
      useFactory() {
        const googleImplementation: AnalyticsImplementation = {
          recordEvent(event: Metric) {
            console.log(event.param1, event.param2, "new event google")
          }
        }
        return new analyticService();

      }
    },
    {
      provide:Reporters,useClass:reporter1,multi:true
    },
    {
      provide:Reporters,useClass:reporter2,multi:true
    }
    ,
    HttpClientModule,
    httpCall

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
