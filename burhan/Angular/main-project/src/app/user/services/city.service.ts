import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  

  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>(environment.apiurl+"/api/city");
  }
}
