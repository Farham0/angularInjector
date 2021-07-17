import { IReport } from "../Model/IReport";
export class reporter2 implements IReport{
    send(message:string){
        console.log(`report 2 `, message);
    }
}