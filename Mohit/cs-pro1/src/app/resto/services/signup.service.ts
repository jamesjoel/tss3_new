import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http : HttpClient) { }


  save(obj:any){
    return this._http.post<any>(environment.apiUrl+"/api/resto/signup", obj);
  }
}
