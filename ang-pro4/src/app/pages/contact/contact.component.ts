import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  allProduct:any[]=[];
  constructor(private _http : HttpClient) {
    this._http.get<any>("https://fakestoreapi.com/products").subscribe(data=>{
      this.allProduct = data;
    })
   }  

  ngOnInit(): void {
  }

}
