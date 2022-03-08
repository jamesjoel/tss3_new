import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquaries',
  templateUrl: './enquaries.component.html',
  styleUrls: ['./enquaries.component.css']
})
export class EnquariesComponent implements OnInit {

  students = [
    {
      name : "Rohit",
      id : "45",
      gender : "male",
      date : "03/05/2022",
      status : "pending",
      class : "warning",
      image : "assets/images/faces/face1.jpg"
    },
    {
      name : "Jaya",
      id : "23",
      gender : "female",
      date : "11/03/2022",
      status : "Approved",
      class : "success",
      image : "assets/images/faces/face2.jpg"
    },
    {
      name : "Nidhi",
      id : "13",
      gender : "female",
      date : "25/03/2022",
      status : "Approved",
      class : "success",
      image : "assets/images/faces/face5.jpg"
    },
    {
      name : "Gaurav",
      id : "36",
      gender : "male",
      date : "09/03/2022",
      status : "Denied",
      class : "danger",
      image : "assets/images/faces/face3.jpg"
    },
    {
      name : "Ram",
      id : "67",
      gender : "male",
      date : "30/03/2022",
      status : "Approved",
      class : "success",
      image : "assets/images/faces/face4.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
