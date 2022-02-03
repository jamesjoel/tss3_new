import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  a="rohit";
  color = ["red", "green", "blue"];
  obj={
    name : "Prateek"
  };

  

  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    console.log("hello");
  }
  demo1(){
    console.log("Hello world");
  }

}
