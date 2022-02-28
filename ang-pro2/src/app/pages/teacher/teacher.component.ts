import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  newTeacher = {
    name : "",
    class : "",
    salary : null

  }

  showMsg = false;

  searchTxt = "";

  allTeacher:any[]=[];
  constructor(private _teacher : TeacherService) {
      this._teacher.getTeacher().subscribe(data=>{
        this.allTeacher = data;
      })
   }

  ngOnInit(): void {
  }

  add(){
    // console.log(this.newTeacher);
    this._teacher.saveTeacher(this.newTeacher).subscribe(data=>{
      console.log(data);
      if(data.success == true){
        this.allTeacher.push(this.newTeacher);
        this.showMsg = true;
        this.newTeacher = {
          name : "",
          class : "",
          salary : null
        }
      }
    })
  }

}
