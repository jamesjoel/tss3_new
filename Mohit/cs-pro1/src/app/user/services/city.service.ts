import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http : HttpClient) { }

  /*
  getAll();
  save();
  update();
  delete()
  */

  getAll(){
    return this._http.get<any>(environment.apiUrl+"/api/city");
  }
}