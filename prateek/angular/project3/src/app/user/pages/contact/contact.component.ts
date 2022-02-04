import { Component, OnInit } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  a="rohit";
  color = ["red", "green", "blue"];
  obj={
    name : "Prateek"
  };

  

  constructor(private x : HelloService) { }

  ngOnInit(): void {
  }

  demo(){
    console.log("hello");
  }
  demo1(){
    console.log("Hello world");
  }
  test(){
    // console.log("***********");
    this.x.demo();
  }

}
