import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-joined',
  templateUrl: './joined.component.html',
  styleUrls: ['./joined.component.css']
})
export class JoinedComponent implements OnInit {

  allstudent:any[]=[];
  constructor(
    private _student : StudentService
  ) {
    this._student.getData().subscribe(data=>{
      this.allstudent = data;
    })
   }


  ngOnInit(): void {
  }

}
