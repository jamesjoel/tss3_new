import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  newEmp = {
    name : "",
    salary : null,
    city : ""
  }
  allEmp:any[]=[];
  constructor(private _emp : EmployeeService) {
    this._emp.getAll().subscribe(data=>{
      this.allEmp = data;
    })
   }

   add(){
     this._emp.save(this.newEmp).subscribe(data=>{
      //  console.log(data);
      if(data.success==true){
        this.allEmp.push(this.newEmp);
        this.newEmp = {
          name : "",
          salary : null,
          city : ""
        }
      }
     })
   }

  ngOnInit(): void {
  }

}
