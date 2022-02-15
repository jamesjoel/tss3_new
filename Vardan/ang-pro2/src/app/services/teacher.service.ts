import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _http : HttpClient) { }

  getTeacher(){
    return this._http.get<any>("http://localhost:3000/api/teacher")
  }

  saveTeacher(obj:any){
    // console.log("----------", obj);
    return this._http.post<any>("http://localhost:3000/api/teacher", obj);
  }
}
