import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _http : HttpClient
  ) { }

// getData(){
//   return this._http.get<any> ("http://localhost:3000/api/admin/student");
// }




}
