import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestoAuthService {

  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }
  do_login(obj:any){
    return this._http.post<any>(environment.apiurl+"/api/resto/auth",obj)
  }
  isRestoLoggedIn(){
    if(localStorage.getItem("resto_token"))
    return true;
    else
    return false;
  }
  logout(){
    localStorage.removeItem("resto_token")
  }
}
