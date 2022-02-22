import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private _http : HttpClient

  ) { }
  getAll(){
    return this._http.get<any>(environment.apiurl+"/api/items/all");
  }
}
