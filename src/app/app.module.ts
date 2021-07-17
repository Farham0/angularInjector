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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
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
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
