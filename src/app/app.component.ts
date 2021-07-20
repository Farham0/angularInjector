import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { analyticService } from './services/analatic';
import { Metric} from './Model/Metric'
import { lagacyAnalytic } from './services/lagacyService';
import { inject } from '@angular/core';
import { iconfig,appConfig } from './config/Iconfig';
import { Reporters } from './services/Reporters';
import { IReport } from './Model/IReport';
import { httpCall} from './services/httpTest';
import { fromEvent , of} from 'rxjs'; 
import {map} from 'rxjs/operators'
import { EventEmitter } from '@angular/core';
import{ Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  providers:[{provide:analyticService,useValue:lagacyAnalytic}]
})
export class AppComponent implements OnInit {
  @ViewChild("btntest",{ static: true }) btnTest!:ElementRef;
  constructor(private servic:analyticService,
              @Inject(appConfig) private _config:iconfig ,
              @Inject(Reporters) private _reports:ReadonlyArray<IReport>,
              private _thisHttp:httpCall ,
              private acvtiveRoute:Router){
    console.log(this._config);
    this._reports.forEach(rerportService => rerportService.send("hi"));
    var event:Metric ={param1:'test', param2:'param2'}     
    this.servic.recordEvent(event);
    this._thisHttp.getLink();
  }
  title = 'testInjector';

  ngOnInit(){
    of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));

     fromEvent<ElementRef>(this.btnTest.nativeElement,'keyup')     
     .subscribe(c=>console.log(c));
  }
  redirect(){
    this.acvtiveRoute.navigate(["login2"],{ queryParams: {id:'2'}});
  }
}
