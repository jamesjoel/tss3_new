import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  restoFrm : FormGroup;
  checkFrm = false;


  constructor(
    private _fb : FormBuilder
  ) {
    this.restoFrm = this._fb.group({
     resto_name : ["", Validators.required],
     username : ["", Validators.required],
     password : ["", Validators.required],
     re_password : ["", Validators.required],
     address : ["", Validators.required],
     contact : ["", Validators.required] 
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.restoFrm.invalid){
      this.checkFrm = true;
      return;
    }
    console.log(this.restoFrm.value)
  }

}
