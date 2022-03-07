import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  constructor(
    private _http : HttpClient
  ) { }
  save(obj:any){
    return this._http.post<any>(environment.apiurl+"/api/items", obj,{
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    });
  }
  getAll(){
    return this._http.get<any>(environment.apiurl+"/api/items", {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    })
  }
  delete(id:any){
    return this._http.delete<any>(environment.apiurl+"/api/items/"+id,
    {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    });
}
  update(obj:any, id : any){
    return this._http.put<any>(environment.apiurl+"/api/items/"+id, obj,
    {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    });
    
  }
}
  

