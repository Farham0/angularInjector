 
import { Metric } from "../Model/Metric";
export const lagacyAnalytic  ={
   recordEvent(event:Metric){
        console.log("lagacy code",event.param1,event.param2);
    }
}