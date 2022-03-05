import { Component, OnInit } from '@angular/core';
import { FormGroup,  } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFrm:FormGroup;
  checkForm = false;

  constructor() { }

  ngOnInit(): void {
  }

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
