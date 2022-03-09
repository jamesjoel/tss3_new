import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrm : FormGroup;

  checkFrm = false;
  constructor(
    private _fb: FormBuilder) { 
      this.loginFrm = this._fb.group({
        username : ["", Validators.required],
        password : ["", Validators.required]

      })
    }

  ngOnInit(): void {
  }

  login()
  {
    if(this.loginFrm.invalid){
      this.checkFrm = true;    
      return;

    }
      console.log(this.loginFrm.value);
  }
  

}
