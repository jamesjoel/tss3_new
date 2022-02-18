import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../services/hello.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  a=20;
  data = ["red", "green", "blue"];

  stu = [
    {
      name : 'rohit',
      age : 25,
      city : "indore"
    },
    {
      name : 'jaya',
      age : 20,
      city : "mumbai"
    },
    {
      name : 'nidhi',
      age : 21,
      city : "indore"
    }

  ]
  constructor(private x : HelloService) { }

  ngOnInit(): void {
  }

  test(){
    //console.log("**********");
    this.x.demo();
  }

}
