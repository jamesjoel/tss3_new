import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/services/student.service';



@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  student:any[]=[];


  // constructor(
  //   public _stu :StudentService

  // ) 
  // {
  //   this._stu.getData().subscribe(data=>{
  //       this.student= data;
  //   })
  //  }



  ngOnInit(): void {
  }

  
  
}
