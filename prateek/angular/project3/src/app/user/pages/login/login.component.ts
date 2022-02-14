import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrm : FormGroup;
  checkFrm = false;

  constructor(
    private _fb : FormBuilder,
    private _auth : AuthService
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
    // console.log(this.loginFrm.value)
    this._auth.do_login(this.loginFrm.value).subscribe(data=>{
      console.log(data);
    })
  }
}
