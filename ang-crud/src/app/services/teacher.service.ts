import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  apiUrl = "http://localhost:3000/api/teacher";
  constructor(
    private _http : HttpClient
  ) { }

  add(obj:any){
    return this._http.post<any>(this.apiUrl, obj);
  }
  getAll(){
    return this._http.get<any>(this.apiUrl);
  }
  update(id:any, obj:any){
    return this._http.put<any>(this.apiUrl+"/"+id, obj);
  }
  remove(id:any){
    return this._http.delete<any>(this.apiUrl+"/"+id);
  }
}
