import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {
  @Input() obj:any;
  constructor() { }

  ngOnInit(): void {
  }

}
