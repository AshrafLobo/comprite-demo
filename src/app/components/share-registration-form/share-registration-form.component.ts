import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShareRegistrationFormService } from 'src/app/services';

@Component({
  selector: 'app-share-registration-form',
  templateUrl: './share-registration-form.component.html',
  styleUrls: ['./share-registration-form.component.scss'],
})
export class ShareRegistrationFormComponent implements OnInit {
  siteKey = '6Lc6ejsaAAAAAI_N3NxRd7Iiu_JoXVmzncrr1z0o';
  shareRegistrationForm: FormGroup;

  constructor(
    private shareRegistrationService: ShareRegistrationFormService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.shareRegistrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      ]),
      idNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      cdscNumber: new FormControl(''),
      company: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
      message: new FormControl('', Validators.required),
      // recaptchaReactive: new FormControl(null, Validators.required),
    });
  }

  // Get form controls
  get firstName() {
    return this.shareRegistrationForm.get('firstName');
  }

  get lastName() {
    return this.shareRegistrationForm.get('lastName');
  }

  get email() {
    return this.shareRegistrationForm.get('email');
  }

  get phoneNumber() {
    return this.shareRegistrationForm.get('phoneNumber');
  }

  get idNumber() {
    return this.shareRegistrationForm.get('idNumber');
  }

  get company() {
    return this.shareRegistrationForm.get('company');
  }

  get service() {
    return this.shareRegistrationForm.get('service');
  }

  get message() {
    return this.shareRegistrationForm.get('message');
  }

  // Submit form fuction
  submit() {
    let values = this.shareRegistrationForm.value;

    for (let key in this.shareRegistrationForm.value) {
      if (values[key] === '' || values[key] === null) {
        delete values[key];
      }
    }

    this.shareRegistrationService.create(values).subscribe((resource) => {
      if (resource && resource !== null) {
        // Clear form control validations
        for (let key in this.shareRegistrationForm.controls) {
          this.shareRegistrationForm.controls[key].clearValidators();
          this.shareRegistrationForm.controls[key].updateValueAndValidity;
        }

        this.shareRegistrationForm.reset();

        this._snackBar.open('Message sent successfully', '', {
          duration: 5000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      }
    });
  }
}
