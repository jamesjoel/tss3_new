import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  cateFrm : FormGroup;
  checkFrm = false;

  constructor(
    private _fb : FormBuilder,
    private _cate : CategoryService,
    private _router : Router
  ) {
    this.cateFrm = this._fb.group({
      name : ["", Validators.required]
    })
   
   }

  ngOnInit(): void {
  }
  submit(){
    if(this.cateFrm.invalid){
      this.checkFrm = false;
      return;
}
    this._cate.save(this.cateFrm.value).subscribe(data=>{
      
      if(data){
        this._router.navigate(["/resto/view-category"]);
     }
    })
}
}
