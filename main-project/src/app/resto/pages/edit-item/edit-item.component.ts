import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ItemsService } from '../../services/items.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  allCate:any[];
  itemFrm : FormGroup;
  checkFrm = false;
  constructor(
    private _cate : CategoryService,
    private _fb : FormBuilder,
    private _items : ItemsService,
    private _router : Router,
    private _actRoute : ActivatedRoute
  ) {

    
    

    this._cate.getAll().subscribe(data=>{
      this.allCate = data;
    })

    this.itemFrm = this._fb.group({
      _id : [],
      image : [],
      resto_id : [],
      name : ["", Validators.required],
      price : [null, Validators.required],
      category : ["", Validators.required]
    })

    let id = this._actRoute.snapshot.paramMap.get("id");
    this._items.getItem(id).subscribe(data=>{
      // console.log(data);
      this.itemFrm.setValue(data);
    })


   }

  ngOnInit(): void {
  }

  submit(){
    if(this.itemFrm.invalid){
      this.checkFrm = true;
      return;
    }
    this._items.update(this.itemFrm.value, this.itemFrm.controls._id.value).subscribe(data=>{
      // console.log(data);
      this._router.navigate(["/resto/view-items"]);
    })
    
  }
}
