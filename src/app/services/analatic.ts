import { Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";
import { AnalyticsImplementation } from "../Model/AnalyticsImplementation";
import { Metric } from "../Model/Metric";

@Injectable()
export class analyticService{
    recordEvent(event:Metric){
        // this.implementation.recordEvent(event);
        
    }
}