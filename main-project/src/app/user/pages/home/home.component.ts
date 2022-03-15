import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allItems:any[];
  constructor(
    private _items : ItemsService
  ) { 
    // this._items.getAll().subscribe(data=>{
    //   this.allItems = data;
    //   console.log(data);
    // })

    console.log(this._items.getAll());
  }

  ngOnInit(): void {
  }

}
