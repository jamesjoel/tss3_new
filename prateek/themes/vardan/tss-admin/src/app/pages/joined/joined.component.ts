import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joined',
  templateUrl: './joined.component.html',
  styleUrls: ['./joined.component.css']
})
export class JoinedComponent implements OnInit {

  student = [
    {
      name : "Mohit",
      id : "123",
      gender : "Male",
      date : "07/03/1999",
      status : "Approved",
      class : "success",
      image : "assets/images/faces/face2.jpg"
    },
    {
      name : "Sumit",
      id : "321",
      gender : "Male",
      date : "04/06/1996",
      status : "Pending",
      class : "info",
      image : "assets/images/faces/face4.jpg"
    },
    {
      name : "Ram",
      id : "54",
      gender : "Male",
      date : "12/03/2001",
      status : "Rejected",
      class : "danger",
      image : "assets/images/faces/face6.jpg"
    },
    {
      name : "Reeta",
      id : "17",
      gender : "Female",
      date : "15/09/1998",
      status : "Approved",
      class : "success",
      image : "assets/images/faces/face3.jpg"
    },
    {
      name : "Shayam",
      id : "18",
      gender : "Male",
      date : "04/07/1999",
      status : "Pending",
      class : "info",
      image : "assets/images/faces/face7.jpg"
    },
    {
      name : "Ragni",
      id : "19",
      gender : "Female",
      date : "07/05/1998",
      status : "Rejected",
      class : "danger",
      image : "assets/images/faces/face1.jpg"
    },
    {
      name : "Rohit",
      id : "20",
      gender : "Male",
      date : "22/12/1994",
      status : "Approved",
      class : "success",
      image : "assets/images/faces/face5.jpg"
    },
    {
      name : "Sonu",
      id : "21",
      gender : "Male",
      date : "06/11/2001",
      status : "Pending",
      class : "info",
      image : "assets/images/faces/face12.jpg"
    },
  
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
