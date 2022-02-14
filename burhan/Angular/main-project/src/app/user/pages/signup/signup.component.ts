import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService} from '../../services/signup.service';
import { rePassCheck, numCheck, sizeCheck,} from '../../helper/custome.validation';
import { CityService } from '../../services/city.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupFrm : FormGroup;
  checkForm = false;
  allcity:any[]=[];
 
  constructor(
    private _fb : FormBuilder,
    private _signup : SignupService,
    private _city : CityService,
    private _router : Router
    
    
    ) { 
    this.signupFrm = this._fb.group(
      {
        // this is controls name
        fullname : ["", Validators.required],
        email : ["", [Validators.required, Validators.email]],
        password : ["", Validators.required], 
        re_password :["", Validators.required],
        address : ["", Validators.required],
        gender : ["", Validators.required],
        city : ["", Validators.required],
        contact : ["", Validators.required]
      },
      {
        Validators : [rePassCheck(), numCheck(), sizeCheck()]
      }
    );

      this._city.getAll().subscribe(data=>{
        this.allcity = data;
      })
  }

  ngOnInit(): void {
  }
signup(){
  if(this.signupFrm.invalid){
    
  this.checkForm = true;
  return;
  }
 this._signup.save(this.signupFrm.value).subscribe(data=>{
   if(data.success == true)
   {
    this._router.navigate(["/login"]);
   }
 })
}
}
