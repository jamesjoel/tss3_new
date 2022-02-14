import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupFrm:FormGroup;
  checkForm = false;
  

  constructor(private _fb : FormBuilder) { 
    this.signupFrm = this._fb.group(
      {
        fullname : ["", Validators.required],
        email : ["", [Validators.required, Validators.email]],
        password : ["", Validators.required],
        re_password : ["", Validators.required],
        address : ["", Validators.required],
        gender : ["", Validators.required],
        city : ["", Validators.required],
        contact : ["", Validators.required]
      }
    );
  }
   
 
  ngOnInit(): void {
  }

  signup(){
    if(this.signupFrm.invalid){
     
      this.checkForm = true; 
      return;
    }
    console.log(this.signupFrm.value);
  }
}