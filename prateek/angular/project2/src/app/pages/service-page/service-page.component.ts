import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  constructor(private _http : HttpClient) { }

  stu:any[]=[];
  stu2:any[]=[];

  ngOnInit(): void {
  }
  get_data(){
    // console.log("Hello");
    this._http.get<any>("https://jsonplaceholder.typicode.com/comments").subscribe(data=>{
      console.log(data);
      this.stu = data;
    })
  }
  get_student(){
    this._http.get<any>("http://localhost:3000/api/student").subscribe(data=>{
      this.stu2 = data;
    })
  }

}
