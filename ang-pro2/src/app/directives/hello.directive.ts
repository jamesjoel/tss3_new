import { Directive } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {


  constructor(private _ele : ElementRef) {
    // console.log(this._ele);
    this._ele.nativeElement.style.backgroundColor = "red";
    this._ele.nativeElement.style.fontSize = "25px";
   }
   @HostListener('click') demo(){
     
     let a = Math.random()*1000000;
     let b = Math.floor(a);
    //  console.log(b);

     this._ele.nativeElement.innerHTML="TSS";
     this._ele.nativeElement.style.backgroundColor="#"+b;
   }

  //  @HostListener('mouseout') demo2(){
  //    alert();
  //  }

}
