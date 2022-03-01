import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {

  @Output() myEvent = new EventEmitter();
  obj={
    w : 0,
    h : 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  set(){
    this.myEvent.emit(this.obj);
  }

}
