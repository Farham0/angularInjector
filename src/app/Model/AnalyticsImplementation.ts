import { Metric } from "./Metric";

export interface AnalyticsImplementation {
    recordEvent(event:Metric):void;
}