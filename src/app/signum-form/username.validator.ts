import {AbstractControl, ValidationErrors} from "@angular/forms";

export class UsernameValidator {


 static pasDespace(control:AbstractControl):ValidationErrors | any{

     if((control.value as string).indexOf(' ') >= 0){
       return {
         pasDespace : true,
       }

       return null;
     }

  }

}
