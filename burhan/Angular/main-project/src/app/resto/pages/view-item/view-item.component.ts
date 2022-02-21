import { Component, OnInit } from '@angular/core';
import { ItemsServices } from '../../services/items.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  allItems : any;

  constructor(
    private _items : ItemsServices
  ) { 
    this._items.getAll().subscribe(data=>{
      this.allItems = data;
    })
  }

  ngOnInit(): void {
  }

}
