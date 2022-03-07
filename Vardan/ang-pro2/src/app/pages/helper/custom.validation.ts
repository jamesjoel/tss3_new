import { FormGroup } from "@angular/forms";

    export function rePassCheck(){
    return function (myForm : FormGroup){
        let a = myForm.controls.password;
        let b = myForm.controls.re_password;

        if (b.errors && ! b.errors.rePassErr){
            return;
        }

        if (a.value != b.value)
        {
        b.setErrors({ rePassErr : true });
        }
    }
    }

    export function numcheck(){
        return function (myForm : FormGroup){
        let a = myForm.controls.contact ;

        if (a.errors && ! a.errors.numErr ){
            return;
        }
        if (isNaN(a.value))
         {
            a.setErrors({ numErr : true});
        }

    }
}

    export function sizeCheck(x=10){
        return function (myForm : FormGroup){
            let a = myForm.controls.contact;
            if (a.errors && ! a.errors.sizeErr ){
                return;
            }
            if (a.value.length !==x)
            {
                a.setErrors({sizeErr : true });
            }
        }
    }
    export function passCheck(){
        return function (myForm : FormGroup){
            let a = myForm.controls.password;
            if (a.errors && ! a.errors.passErr ){
                return;
            }
            let x=4;
            if  (a.value.length !<= x)
            {
               
                a.setErrors({passErr : true });
            }
        }
    }

