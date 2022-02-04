import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private _http : HttpClient
  ) { }

  save(obj:any){
    return this._http.post<any>(environment.apiUrl+"/api/signup", obj);
  }
}
