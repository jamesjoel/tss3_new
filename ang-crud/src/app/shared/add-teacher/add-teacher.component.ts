import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  @Output() sendData = new EventEmitter();

  teacherForm : FormGroup;
  checkForm = false;
  constructor(
    private _fb : FormBuilder
  ) {
    this.teacherForm = this._fb.group({
      fullname : ["", Validators.required],
      email : ["", Validators.required],
      contact : ["", Validators.required],
      address : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }
  submit(btn:any){
    if(this.teacherForm.invalid){
      this.checkForm=true;
      return;
    }
    
    this.sendData.emit(this.teacherForm.value);
    btn.click();
  }

}
