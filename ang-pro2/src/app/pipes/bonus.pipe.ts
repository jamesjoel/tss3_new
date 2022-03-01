import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(a:any, b:any){
    if(b=="8th" || b == "9th" || b == "10th")
    {
      let x = a*25/100;
      return x;

    }
    else{
      let x = a*10/100;
      return x;
    }
    
    
  }

}
