import { Injectable } from '@angular/core';
import {  CanActivate,} from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  canActivate() {
    
    if(localStorage.getItem("token")){
    return true;
    }
    else{
      this._router.navigate(["/login"]);
      return false;
    }
  }

  constructor(
    private _router: Router
  ){

  }
  
}
