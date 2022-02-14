import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { ApiService } from "../../../services/api.service"
import { Router } from '@angular/router';
import { checkPhone } from "../../helper/custom.validators"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  regForm : FormGroup;


  constructor( 
    private _fb : FormBuilder,
    private _api : ApiService,
    private _router : Router
     ) {

    this.regForm = this._fb.group(
      {
        firstName : ["", Validators.required],
        lastName : ["", Validators.required],
        email : ["", [Validators.required, Validators.email]],
        phone : ["", Validators.required],
        gender : ["", Validators.required],
        address : ["", Validators.required],
        country : ["", Validators.required],
        userName : ["", Validators.required],
        password : ["", Validators.required],
        rePassword : ["", Validators.required]
      },
      {
        validator : [ checkPhone() ]
      }
    );

   }

  ngOnInit(): void {
  }

  alertStatus = false;
  checkForm = false;

  signUp(){
    if(this.regForm.invalid){

      this.checkForm = true;
      return;
    }
    this.checkForm = true;
    this._api.save(this.regForm.value).subscribe(data=>{
      if(data.success == true){
        this.alertStatus = true;
        this._router.navigate(["/login"]);
      }
    })
  }



  buttonText = "Show";
  buttonVal = "password";
  passShow(){
    if (this.buttonVal == "password"){
      this.buttonVal = "text"
      this.buttonText = "Hide"
    }else{
      this.buttonVal = "password"
      this.buttonText = "Show"
    }
  }

}
