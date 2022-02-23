import { Component, OnInit } from '@angular/core';

@Component({ // @Module, @Service -- Decorators
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = "Gaurav Verma";
  para = "sdfg sdfg sdfggtrg sdfv sergsdfbv serg sdfbv g zdfsbv serg sd";
  

  
  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    console.log("hello");
  }

}
