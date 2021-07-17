import { InjectionToken } from "@angular/core"; 
export interface iconfig{
    angularurl:string,
}

export const appConfig = new InjectionToken<iconfig>('appcongig',{
    providedIn:'root',
    factory :()=>({angularurl:'testUrl'})
});