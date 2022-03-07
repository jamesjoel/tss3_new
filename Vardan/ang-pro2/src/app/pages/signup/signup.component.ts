import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators, } from '@angular/forms';
import { RequiredValidator } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { rePassCheck, numcheck, sizeCheck ,passCheck} from '../helper/custom.validation';
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
    private _fb: FormBuilder,
    private _signups : SignupService,
    private _router : Router
    )
   { 
    this.signupFrm= this._fb.group(
      {
        fullname : ["",Validators.required],
        email : ["", [Validators.required, Validators.email]],
        password : ["",Validators.required],
        re_password : ["",Validators.required],
        contact : ["",Validators.required],
        address : ["",Validators.required],
        city : ["",Validators.required],
        gender : ["",Validators.required]
      },
      {
        validator
         : [rePassCheck(), numcheck(), sizeCheck(), passCheck()]
      }
    );
  }

  ngOnInit(): void {
  }

  signup(){
    if(this.signupFrm.invalid){
      this.checkForm=true;
      return;
    }
    this._signups.save(this.signupFrm.value).subscribe(data=>{
      console.log(this.signupFrm.value)
        this._router.navigate(["/login"]);
      
    })

    
  }

}
