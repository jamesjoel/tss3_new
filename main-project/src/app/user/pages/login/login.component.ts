import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrm : FormGroup;
  checkFrm = false;

  errMsg="";
  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService,
    private _router : Router
  ) {
    this.loginFrm = this._fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.loginFrm.invalid){
      this.checkFrm=true;
      return;
    }
    //console.log(this.loginFrm.value)
    this._auth.do_login(this.loginFrm.value).subscribe( data =>{
      // console.log(data);
      localStorage.setItem("token", data.token);
      this._router.navigate(["/profile"]);
    }, err =>{
      // console.log(err.error);
      if(err.error.type==1)
      {
        this.errMsg ="This Username/Email is not Registred !";
      }
      if(err.error.type==2)
      {
        this.errMsg ="This Password is Incorrect !";

      }
    })
  }

}
