import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AntiBackdoorGuard implements CanActivate {

  constructor(
    private _router: Router
  ){}
  canActivate(){
    if(localStorage.getItem("token")){
      this._router.navigate(["/"]);
      return false;
      
    }
    return true;
  }
  
}
