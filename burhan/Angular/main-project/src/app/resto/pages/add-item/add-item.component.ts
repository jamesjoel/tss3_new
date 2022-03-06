import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
// import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  allCate : any[]=[];
  itemFrm : FormGroup;
  checkFrm = false;

  constructor(
    private _Cate : CategoryService,
    private _fb : FormBuilder,
    private _items : ItemsService,
    private _router : Router
  ) {
    this._Cate.getAll().subscribe(data=>{
      this.allCate = data;
    })
    this.itemFrm = this._fb.group({
      name : ["", Validators.required],
      price : [null, Validators.required],
      category : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }
  submit(){
    if(this.itemFrm.invalid){
      this.checkFrm = true;
      return;
    }
    this._items.save(this.itemFrm.value).subscribe(data=>{
      // console.log(data);
      this._router.navigate(["/resto/view.items"]);
    })
  }
}
