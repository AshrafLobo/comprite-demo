import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class FormValidators {
  static emailOrNumberRequired(fg: FormGroup): ValidationErrors | null {
    const email = fg.controls['email'].value;
    const phoneNumber = fg.controls['phoneNumber'].value;

    return email || phoneNumber ? null : { emailOrNumber: true };
  }

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    return null;
  }
}
