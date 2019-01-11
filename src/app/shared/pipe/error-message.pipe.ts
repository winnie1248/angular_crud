import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { ErrorType } from '../model';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {
  private errorType: Array<string> = Object.keys(ErrorType);

  transform(errors: ValidationErrors, args?: any): string {
    if (!errors) {
      return null;
    }

    let errorMessage: string;
    const errorType = this.errorType.find((type: string) => errors[type]);

    if (errorType === 'required') {
      errorMessage = 'This field is required.';
    } else if (errorType === 'email') {
      errorMessage = 'E-mail format error.';
    } else if (errorType === 'pattern') {
      errorMessage = 'Field format error.';
    } else if (errorType === 'minlength') {
      errorMessage = `Please enter at least ${errors.minlength.requiredLength} characters.`;
    } else if (errorType === 'maxlength') {
      errorMessage = `Please enter up to ${errors.maxlength.requiredLength} characters`;
    }
    return errorMessage;
  }

}
