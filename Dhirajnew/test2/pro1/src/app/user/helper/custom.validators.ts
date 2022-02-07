import { FormGroup } from "@angular/forms";


export function checkPhone(){
    return function( myForm: FormGroup ){
        let n = myForm.controls.phone;

        if(n.errors && ! n.errors.phoneLen){
            return;
        }
        let x = 10
        if (n.value.length != x){
            console.log(n.value.length)
            n.setErrors({ phoneLen : true })
        }
    }
}