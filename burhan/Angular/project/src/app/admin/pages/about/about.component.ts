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
    console.log("Hello Dunia");
  }
  demo2(){
    console.log("i love you");
  }
  demo3(){
    console.log("i love you too");
  }
  demo5(){
    console.log("%%%%%%%%%%%");
  }
  demo10(){
    return false;
  }
}
