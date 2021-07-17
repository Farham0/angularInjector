import { IReport } from "../Model/IReport";
export class reporter1 implements IReport{
    send(message:string){
        console.log(`report 1 `, message);
    }
}