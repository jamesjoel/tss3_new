import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  allItems : any[]=[];
  item:any;

  constructor(
    private _items : ItemsService
  ) { 
    this._items.getAll().subscribe(data=>{
      this.allItems = data;
    })
  }

  ngOnInit(): void {
  }

  askDelete(obj:any){
    this.item = obj;
  }
  confDelete(btn:any){
    this._items.delete(this.item._id).subscribe(data=>{
      let n = this.allItems.indexOf(this.item);
      this.allItems.splice(n, 1);
      // this.x=true;
      btn.click();
    })
  }
}
