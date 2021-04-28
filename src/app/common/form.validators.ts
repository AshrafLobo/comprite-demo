import { FormGroup, ValidationErrors } from '@angular/forms';

export function emailOrNumberRequired(fg: FormGroup): ValidationErrors {
  const email = fg.controls['email'].value;
  const phoneNumber = fg.controls['phoneNumber'].value;

  return email || phoneNumber ? null : { emailOrNumber: true };
}
