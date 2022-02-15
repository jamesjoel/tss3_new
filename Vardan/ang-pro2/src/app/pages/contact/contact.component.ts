import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  l=0;
  t=0;
  constructor() { }

  ngOnInit(): void {
  }
  demo(){
    this.l = Math.floor(Math.random()*500);
    this.t = Math.floor(Math.random()*500);
  }

}
