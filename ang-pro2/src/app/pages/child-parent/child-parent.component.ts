import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent implements OnInit {

  a:any;
  test:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  demo(data:any){
    // console.log("---------------", data);
    this.a = data;
  }


  dataCome(obj:any){
    // console.log(obj);
    this.test = obj;
  }
  

}
