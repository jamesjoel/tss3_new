import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  
  newTeacher = {
    name : "",
    class : "",
    salary : null

  }
  
  showMsg = false;

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
        this.newTeacher ={
          name : "",
          class : "",
          salary : null
        }
      }
    })
  }

}
