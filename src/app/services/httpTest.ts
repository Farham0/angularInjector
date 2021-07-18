import {Injectable} from '@angular/core'; 
import { HttpClient} from '@angular/common/http' 


@Injectable({
    providedIn:'root'
})
export class httpCall{
    constructor(private httpClient:HttpClient){
      
    }
    getLink (){
        let url = `http://localhost:3000`;
        this.httpClient.get(url).subscribe(
        (data)=>{console.log("DATA",data)},
        (er)=>{console.log("ERRR",er)},
        ()=>{ console.log("complete")}
        )
    }
}