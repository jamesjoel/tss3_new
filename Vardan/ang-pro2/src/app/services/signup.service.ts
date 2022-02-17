import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private _http : HttpClient
  ) { }
    //its a func, when hit api it will run
  save(obj:any){ //data comes from signup's component page
    //in func's method call by component thats why "return" put in below this line
      return this._http.post<any>("http://localhost:3000/api/signup", obj);
  }
}
