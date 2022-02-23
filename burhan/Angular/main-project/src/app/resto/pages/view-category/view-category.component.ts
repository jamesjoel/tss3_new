import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  
  allCate : any[];
  cate:any;

  constructor(
    private _cate : CategoryService
  ) { 
    this._cate.getAll().subscribe(data=>{
      this.allCate = data;
    })
  }

  ngOnInit(): void {
  }

}
