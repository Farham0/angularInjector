import { Component, Inject } from '@angular/core';
import { analyticService } from './services/analatic';
import { Metric} from './Model/Metric'
import { lagacyAnalytic } from './services/lagacyService';
import { inject } from '@angular/core';
import { iconfig,appConfig } from './config/Iconfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{provide:analyticService,useValue:lagacyAnalytic}]
})
export class AppComponent {
  constructor(private servic:analyticService,
              @Inject(appConfig) private _config:iconfig  ){
    console.log(this._config);
    var event:Metric ={param1:'test', param2:'param2'}     
    this.servic.recordEvent(event);
  }
  title = 'testInjector';
}
