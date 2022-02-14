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

  errMsg=""

  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService,
    private _router : Router
  ) { 
    this.loginFrm = this._fb.group({
      username : ["", Validators.required],
      password : ["",Validators.required],
    })
  }

  ngOnInit(): void {
  }
  submit(){
    if(this.loginFrm.invalid){
      this.checkFrm=true;
      return;
    }
    this._auth.do_login(this.loginFrm.value).subscribe(data=>{
      // if(data.success == true){
        localStorage.setItem("token", data.token);
        this._router.navigate(["/profile"])
      
    },err =>{
      if(err.error.type==1)
      {
        this.errMsg = "this username/email is not registerd"
      }
      if(err.error.type==2)
      {
        this.errMsg = "password is incorrect"
      }
    })
  }
}
