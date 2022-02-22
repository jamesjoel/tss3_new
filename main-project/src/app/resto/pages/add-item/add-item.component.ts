import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  allCate:any[];
  itemFrm : FormGroup;
  checkFrm = false;
  constructor(
    private _cate : CategoryService,
    private _fb : FormBuilder,
    private _items : ItemsService,
    private _router : Router
  ) {
    this._cate.getAll().subscribe(data=>{
      this.allCate = data;
    })

    this.itemFrm = this._fb.group({
      name : ["", Validators.required],
      price : [null, Validators.required],
      category : ["", Validators.required],
      image : ["", Validators.required]
    })


   }

  ngOnInit(): void {
  }

  submit(obj:any){
    this.checkFrm = true;
    if(this.itemFrm.invalid){
      return;
    }

    let form = new FormData();
    console.log(obj.files[0]);
    // return;
    if(obj.files[0].type == "image/jpeg" || obj.files[0].type=="image/png" || obj.files[0].type=="image/jpg"){
      form.append("image", obj.files[0]);
      form.append("formdata", JSON.stringify(this.itemFrm.value));
      this._items.save(form).subscribe(data=>{
      
        this._router.navigate(["/resto/view-items"]);
      })
    }else{
     
      this.itemFrm.setErrors({ typeErr : true });
      console.log(this.itemFrm.errors);
      console.log(this.checkFrm);
      return;
    }
    // if(obj.files)

    
    
  }

}
