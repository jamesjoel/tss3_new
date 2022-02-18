import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  demo1(){
    console.log("hello world");
  }
  demo2(){
    console.log("----------");
  }
  demo3(){
    console.log("+++++++++++");
  }
  demo4(){
    console.log("**************");
  }
  demo5(){
    console.log("%%%%%%%%%%%");
  }
  demo6(){
    console.log("#####################");
  }
  demo10(){
    return false;
  }
}
