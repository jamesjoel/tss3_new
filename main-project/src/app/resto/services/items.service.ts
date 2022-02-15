import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private _http : HttpClient
  ) { }

  save(obj:any){
    return this._http.post<any>(environment.apiUrl+"/api/items", obj, {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    });
  }

  getAll(){
    return this._http.get<any>(environment.apiUrl+"/api/items", {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    })
  }
}
