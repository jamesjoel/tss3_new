import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators, } from '@angular/forms';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFrm:FormGroup;
  checkForm = false;

  constructor(private _fb: FormBuilder) { 
    this.signupFrm= this._fb.group(
      {
        fullname : ["",Validators.required],
        email : ["",Validators.required],
        password : ["",Validators.required],
        re_password : ["",Validators.required],
        address : ["",Validators.required],
        city : ["",Validators.required],
        gender : ["",Validators.required]
      }
    );
  }

  ngOnInit(): void {
  }

  signup(){
    this.checkForm = true;
    console.log(this.signupFrm.value);
  }

}
