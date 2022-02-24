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

  delete(id:any){
    return this._http.delete<any>(environment.apiUrl+"/api/items/"+id, 
    {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    });
  }

  update(obj:any, id : any){
    
    return this._http.put<any>(environment.apiUrl+"/api/items/"+id, obj, 
    {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    });
  }
  getItem(id:any){
    return this._http.get<any>(environment.apiUrl+"/api/items/"+id);
  }
}
