import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>("http://localhost:3000/api/employee");
  }
  
  save(obj:any){
    return this._http.post<any>("http://localhost:3000/api/employee", obj);

  }
}
