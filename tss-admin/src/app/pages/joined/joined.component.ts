import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joined',
  templateUrl: './joined.component.html',
  styleUrls: ['./joined.component.css']
})
export class JoinedComponent implements OnInit {

  studentArr = [
    {
      name : "",
      id : "",
      gender : "",
      date : "",
      status : "",
      image : "assets/images/faces/face1.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
