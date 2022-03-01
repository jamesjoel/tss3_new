import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProduct : any[]=[];
  check=true;
  constructor(
    private _http : HttpClient
  ) {
    this._http.get<any>("https://fakestoreapi.com/products").subscribe(data=>{
      this.allProduct = data;
      this.check = false;
    })

   }

  ngOnInit(): void {
  }

}
