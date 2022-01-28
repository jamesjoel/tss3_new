import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  a=true;
  b = 50;
  type="password";
  label = "Show";

  x=100;
  constructor() { }

  ngOnInit(): void {
  }
  demo1(){
    // this.a = false;
    this.a = !this.a;
  }

  change(){
    if(this.type == 'password'){
      this.type = "text";
      this.label = "Hide";
    }else{
      this.type = "password";
      this.label = "Show";
    }
  }
}
