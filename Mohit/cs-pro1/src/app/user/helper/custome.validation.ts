import { FormGroup } from '@angular/forms';

export function rePassCheck(){
    return function(myFrm : FormGroup){
        let a = myFrm.controls.password;
        let b = myFrm.controls.re_password;

        if(b.errors && ! b.errors.rePassErr)
        {
            return;
        }

        if(a.value != b.value)
        {
            b.setErrors({ rePassErr : true });
        }
    }
}


export function numCheck(){
    return function(abc : FormGroup){
        let a = abc.controls.contact;
        
        if(a.errors && !a.errors.numErr){
            return;
        }
        
        if(isNaN(a.value)){
            a.setErrors({ numErr : true })
        }
    }
}
export function sizeCheck(x=10){
    return function(abc: FormGroup){
        let a = abc.controls.contact;
        if(a.errors && !a.errors.sizeErr){
            return;
        }

        if(a.value.length != x)
        {
            a.setErrors({ sizeErr : true })
        }
    }
} 