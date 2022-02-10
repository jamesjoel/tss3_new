import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestoAuthService } from '../../services/resto.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrm : FormGroup;
  checkFrm = false;
  errMsg = "";
  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _auth : RestoAuthService
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
      this.checkFrm = true;
      return;
    }

    this._auth.do_login(this.loginFrm.value).subscribe(data=>{
      // console.log(data);
      localStorage.setItem("resto_token", data.token);
      this._router.navigate(["/resto/dash"]);
    }, err=>{
      // console.log(err);
      if(err.error.type == 1)
      {
        this.errMsg = "This Username and Password is Incorrect";
      }
      if(err.error.type == 2)
      {
        this.errMsg = "This Password is Incorrect";

      }
    })
  }
}
