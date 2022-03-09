import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {


  students=[
    {
    name : "Vardan",
    id : "123",
    gender : "Male",
    date : "1 Feb 2022",
    status : "Approved",
    class : "success",
    img : "assets/images/faces/face4.jpg"
    },
    { name : "Prateek",
    id : "456",
    gender : "Male",
    date : "1 Feb 2022",
    status : "Pending",
    class : "info",
    img : "assets/images/faces/face4.jpg"
  },
    { name : "Mohit",
    id : "789",
    gender : "Male",
    date : "1 Feb 2022",
    status : "Rejected",
    class : "danger",
    img : "assets/images/faces/face4.jpg"
  },
    { name : "Kuldeep",
    id : "1011",
    gender : "Male",
    date : "1 Feb 2022",
    status : "Approved",
    class : "success",
    img : "assets/images/faces/face4.jpg"
  },
    { name : "Dheraj",
    id : "1213",
    gender : "Male",
    date : "1 Feb 2022",
    status : "Rejected",
    class : "danger",
    img : "assets/images/faces/face4.jpg"
  },
    { name : "Rohini",
    id : "1415",
    gender : "Male",
    date : "1 Feb 2022",
    status : "Rejected",
    class : "danger",
    img : "assets/images/faces/face4.jpg"
  },
    { name : "Deepti",
    id : "1617",
    gender : "Female",
    date : "1 Feb 2022",
    status : "Pending",
    class : "info",
    img : "assets/images/faces/face4.jpg"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  
  
}
