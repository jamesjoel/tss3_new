import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter=0;
  w=100;
  h=100;

  constructor() { }

  ngOnInit(): void {
  }
count(){
  this.counter++;
}
Welcome(){
  console.log("Hello");
}
demo(){
  this.w=500;
}
demo1(){
  this.w=100;
}
demo2(){
  this.w++;
  this.h++;
}
demo10(){
  return false;
}

}
