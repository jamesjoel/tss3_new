import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { numCheck, rePasscheck, sizeCheck } from '../../helper/custome.validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupFrm:FormGroup;
  checkForm = false;

  constructor(
    private _fb : FormBuilder,
    private _signup : SignupService,
    private _router : Router
    ) {
    this.signupFrm = this._fb.group(
      { //this is controls name
        fullname : ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", Validators.required],
        re_password: ["", Validators.required],
        address: ["", Validators.required],
        gender: ["", Validators.required],
        city: ["", Validators.required],
        contact: ["", Validators.required]
      }
    )
   }

  ngOnInit(): void {
  }

  signup(){
  if(this.signupFrm.invalid){

    this.checkForm = true;
    return;
  }
   this._signup.save(this.signupFrm.value).subscribe(data=>{
     console.log(data);
   })
  }
}