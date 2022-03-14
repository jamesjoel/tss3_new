import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  allTeacher : any[]=[];
  constructor(
    private _teacher : TeacherService
  ) { }

  ngOnInit(): void {
    this._teacher.getAll().subscribe(response=>{
      console.log(response);
      this.allTeacher = response;
    })
  }

  sendData(obj:any){
    //console.log(obj);
    this._teacher.add(obj).subscribe(response=>{
      // console.log(response.result.insertedId);
      obj._id = response.result.insertedId;
      this.allTeacher.push(obj);
      // console.log(this.allTeacher);
    })
  }

}
