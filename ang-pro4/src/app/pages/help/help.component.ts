import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  obj={
    width : 200,
    height : 200
  }
  constructor() { }

  ngOnInit(): void {
  }
  set(obj:any){
    
    this.obj.width = obj.w;
    this.obj.height = obj.h;
  }

}
