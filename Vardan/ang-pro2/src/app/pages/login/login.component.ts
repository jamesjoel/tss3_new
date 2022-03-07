import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

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
    private _fb: FormBuilder,
    private _login : LoginService,
    private _router : Router
    )
   {
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
  //  console.log(this.loginFrm.value);
  //  return;
  this._login.do_login(this.loginFrm.value).subscribe(data=>{
      
      localStorage.setItem("token" , data.token);
      // console.log(data);
      // retsurn;
      this._router.navigate(["/"]);


      if(data.success == true){
        this._router.navigate(["/profile"]);
      }

  }, err =>{
    // console.log(err.error);
    // return;
    if(err.error.type ==1)
    {
      this.errMsg ="This Username/Email is not Registred !";
    }
    if(err.error.type ==2)
    {
      this.errMsg ="This Password is Incorrect !";
    }
  })
  }
}
