import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr:any, a : any) {
    return arr;
    // let arr2 = arr.map((x:any)=>{
    //   x.name = x.name.toLowerCase().includes(a);
    //   return x;
    // })
    // return arr2;
    // return arr.toLowerCase().includes(a);
  }

}
