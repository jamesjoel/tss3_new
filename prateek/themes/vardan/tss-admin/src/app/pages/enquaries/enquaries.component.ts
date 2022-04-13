import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-enquaries',
  templateUrl: './enquaries.component.html',
  styleUrls: ['./enquaries.component.css']
})
export class EnquariesComponent implements OnInit {

  allstudents:any[]=[];

  constructor(
    private _student : StudentService
  ) {
    this._student.getData().subscribe(data=>{
      this.allstudents = data;
    })
   }

  ngOnInit(): void {
  }

}
