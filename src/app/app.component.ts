import { Component, Inject } from '@angular/core';
import { analyticService } from './services/analatic';
import { Metric} from './Model/Metric'
import { lagacyAnalytic } from './services/lagacyService';
import { inject } from '@angular/core';
import { iconfig,appConfig } from './config/Iconfig';
import { Reporters } from './services/Reporters';
import { IReport } from './Model/IReport';
import { httpCall} from './services/httpTest';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  providers:[{provide:analyticService,useValue:lagacyAnalytic}]
})
export class AppComponent {
  constructor(private servic:analyticService,
              @Inject(appConfig) private _config:iconfig ,
              @Inject(Reporters) private _reports:ReadonlyArray<IReport>,
              private _thisHttp:httpCall ){
    console.log(this._config);
    this._reports.forEach(rerportService => rerportService.send("hi"));
    var event:Metric ={param1:'test', param2:'param2'}     
    this.servic.recordEvent(event);
    this._thisHttp.getLink();
  }
  title = 'testInjector';
}
