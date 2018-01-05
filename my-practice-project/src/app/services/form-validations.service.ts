import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationsService {

  constructor() { }


  emailValidator(control: FormControl) {
    let email = control.value;
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (email && email != "" && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
            return {"email":{"message": "Please enter valid email address"}};
        }
    return null;
  }

  nameValidator(control: FormControl) {
    let name = control.value;
    let NAME_REGEXP = /^[a-zA-Z \.]*$/i;

        if (name && name != "" && (name.length < 2 || !NAME_REGEXP.test(name))) {
            return {
              "name":{"message":  "Please enter valid name"}
            };
        }
    return null;
  }

  numberValidator(control: FormControl) {
    let number = control.value;
    let NUMBER_REGEXP = /^[0-9]*$/i;

        if (number && number != "" && !NUMBER_REGEXP.test(number)) {
            return {"number":{"message": "Please enter valid number"}};
        }
    return null;
  }

  yearValidator(control: FormControl) {
    let year = control.value;
    let YEAR_REGEXP = /^[1-2][0-9][0-9][0-9]$/i;
    // let YEAR_REGEXP = /^([1][9][7-9][0-9])?|([2][0][0-1][0-9])?$/i;

        if (year && year != "" && !YEAR_REGEXP.test(year)) {
            return {"year":{"message": "Please enter valid year"}};
        }
    return null;
  }

  fullDateValidator(control: FormControl) {
    let fullDate = control.value;
    let FULL_DATE_REGEXP = /^[0-3]?[0-9][ -\.\/][0-1]?[0-9][ -\.\/][1-2][0-9][0-9][0-9]$/i;

        if (fullDate && fullDate != "" && !FULL_DATE_REGEXP.test(fullDate)) {
            return {"fulldate":{"message": "Please enter valid date"}};
        }
    return null;
  }

}
