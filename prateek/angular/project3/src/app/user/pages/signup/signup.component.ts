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
        contact: ["", Validators.required],
        pic: ["", Validators.required]
      }
    )
   }

  ngOnInit(): void {
  }

  signup(obj:any){
  if(this.signupFrm.invalid){

    this.checkForm = true;
    return;
  }
   var form = new FormData();
   form.append("picture", obj.files[0]);
   form.append("FormData", JSON.stringify(this.signupFrm.value));
   this._signup.save(form).subscribe(res=>{
     this._router.navigate(["/login"]);
   })
  }
}