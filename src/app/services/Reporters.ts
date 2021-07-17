import { InjectionToken } from "@angular/core";
import { IReport } from "../Model/IReport";

export const Reporters = new InjectionToken<IReport>('Report');