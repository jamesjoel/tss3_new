import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private _http : HttpClient
  ) { }

  getData(){
    return this._http.get<any>(environment.apiUrl+"/api/user/profile", {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("token"))
      }
    });
  }
}
