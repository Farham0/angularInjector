import { Injectable } from "@angular/core";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from "@angular/router"
import { Observable } from 'rxjs';

@Injectable()
export class loginGard implements CanActivate{
    constructor(private _router:Router){}
    canActivate(
         next: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
         const isLoggedIn = false;
         console.log(next);
         console.log(state);
         this._router.navigate(['login2'],{})
         console.log('canActivate', isLoggedIn);
         return isLoggedIn;
         }  
        
}