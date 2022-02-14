import { FormGroup} from "@angular/forms";

export function rePasscheck(){
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
    return function(num : FormGroup){
        let a = num.controls.contact;

        if(a.errors && ! a.errors.numErr){
            return;
        }

        if(isNaN(a.value)){
            a.setErrors({ numCheck : true });
        }
    }
}

export function sizeCheck(x=10) {
    return function(num : FormGroup){
        let a = num.controls.contact;
        if(a.errors && !a.errors.sizeErr){
            return;
        }

        if(a.value.lenght !=x)
        {
            a.setErrors({ sizeErr : true })
        }
    }
}
