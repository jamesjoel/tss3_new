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
  welcome(){
    console.log("hello world");
  }
  demo1(){
    this.w=500;
  }
  demo2(){
    this.w=100;
  }

  demo3(){
    this.w++;
    this.h++;
  }

}
