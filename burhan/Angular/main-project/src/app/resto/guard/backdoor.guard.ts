import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {

  constructor(
    private _router : Router
  ){}
  
  
  canActivate()
     {
if(localStorage.getItem("resto_token")){
  return true;
}
 else{
   this._router.navigate(["/resto/login"]);
   return false;
 }   
  }
  
}
