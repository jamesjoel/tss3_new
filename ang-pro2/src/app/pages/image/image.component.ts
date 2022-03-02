import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  myForm:FormGroup;
  checkForm = false;
  constructor(
    private _fb : FormBuilder
  ) {
    this.myForm = this._fb.group({
      name : ["", Validators.required],
      contact : ["", Validators.required],
      image : ["", Validators.required]
    });
   }

  ngOnInit(): void {
  }

  submit(obj:any){
    if(this.myForm.invalid){
      this.checkForm=true;
      return;
    }
    let image = obj.files[0];
    console.log(image);
    if(image.type == "image/jpg" || image.type == "image/jpeg" || image.type =="image/png")
    {
      if(image.size <= (1024*1024*2))
      {
        console.log("success");
      }
      else{

        this.myForm.controls.image.setErrors({ sizeErr : true });
      }
    }
    else{
      this.myForm.controls.image.setErrors({ typeErr : true });
    }




  }
}
