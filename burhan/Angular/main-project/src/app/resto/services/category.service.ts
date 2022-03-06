import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  constructor(
    private _http : HttpClient
  ) { }
  save(obj:any){
    return this._http.post<any>(environment.apiurl+"/api/category", obj,{
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    });
  }
  getAll(){
    return this._http.get<any>(environment.apiurl+"/api/category", {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
      }
    })
  }
  delete(id:any){
    return this._http.delete<any>(environment.apiurl+"/api/category/"+id, {
      headers : {
        Authorization : JSON.stringify(localStorage.getItem("resto_token"))
  }
})
}
}
