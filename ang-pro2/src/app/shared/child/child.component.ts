import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() myEvent = new EventEmitter();
  @Output() myAction = new EventEmitter();


  city = "indore";

  user = {
    name : "rohit",
    age : 25,
    city : "mumbai"
  }


  constructor() { }

  ngOnInit(): void {
  }
  goToParent(){
    this.myEvent.emit(this.city);
  }

  hello(){
    this.myAction.emit(this.user);
  }

}
