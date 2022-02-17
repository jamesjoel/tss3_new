import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { CityService} from '../../services/city.service';
import { rePassCheck, numCheck, sizeCheck } from '../../helper/custome.validation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupFrm:FormGroup;
  checkForm = false;
  allCity:any[]=[];
  

  constructor(
    private _fb : FormBuilder,
    private _signup : SignupService,
    private _city : CityService,
    private _router : Router
    ) { 
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
      },
      {
        validators : [rePassCheck(), numCheck(), sizeCheck()]
      }
    );

     this._city.getAll().subscribe(data=>{
       this.allCity = data;
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
     // console.log(data);
     if(data.success == true)
     {
       this._router.navigate(["/login"]);
     }
    })
  }
}