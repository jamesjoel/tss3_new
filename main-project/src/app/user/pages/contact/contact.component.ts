import { Component, OnInit } from '@angular/core';

@Component({ // @Module, @Service -- Decorators
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  a="rohit";
  color = ["red", "green", "blue"];
  obj={
    name : "Dheeraj"
  };
  

  
  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    console.log("hello");
  }

}
