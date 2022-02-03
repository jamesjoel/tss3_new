import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  l=0;
  t=0;

  constructor() { }

  ngOnInit(): void {
  }
  demo(){
    this.l = Math.floor(Math.random() * 500);
    this.t = Math.floor(Math.random() * 500);
  }
  demo1(){
    console.log("Hello World");
  }
  demo2(){
    console.log("-------------------");
  }
  demo3(){
    console.log("++++++++++++++");
  }
  demo4(){
    console.log("*************");
  }

}
