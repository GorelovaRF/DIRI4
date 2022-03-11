import { FormGroup} from '@angular/forms';
    
export function CustomeDateValidators(anyo:string) {
        return (formGroup: FormGroup) => {
          //  const year = formGroup.get(anyo)?.value;
          const year = formGroup.controls[anyo];
          if(year.errors && !year.errors.customeDateValidators){
              return;
          }
            if (year.value < 1990 || year.value > 2022) {
                year.setErrors({ customeDateValidators:true });
            }else {
                year.setErrors({ customeDateValidators:false });
            }
        };
    
}