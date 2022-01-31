import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  a="Mohammed";
  color = ["red", "blue", "yellow"];
  obj={
    name : "Hussain"
  };

  constructor() { }
  
  

  ngOnInit(): void {
  }
  demo(){
    console.log("hello");
  }

}
