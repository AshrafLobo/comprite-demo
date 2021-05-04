import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyErrorStateMatcher } from 'src/app/common/error-state-matcher';
import { FormValidators } from 'src/app/common/form.validators';
import { IssuersService, ShareRegistrationFormService } from 'src/app/services';

@Component({
  selector: 'app-share-registration-form',
  templateUrl: './share-registration-form.component.html',
  styleUrls: ['./share-registration-form.component.scss'],
})
export class ShareRegistrationFormComponent implements OnInit {
  siteKey = '6Lc6ejsaAAAAAI_N3NxRd7Iiu_JoXVmzncrr1z0o';
  issuers;
  shareRegistrationForm: FormGroup;
  matcher;

  constructor(
    private shareRegistrationService: ShareRegistrationFormService,
    private issuersService: IssuersService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.matcher = new MyErrorStateMatcher();

    this.shareRegistrationForm = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          FormValidators.cannotContainSpace,
        ]),
        lastName: new FormControl('', [
          Validators.required,
          FormValidators.cannotContainSpace,
        ]),
        email: new FormControl('', [Validators.email]),
        address: new FormControl(''),
        phoneNumber: new FormControl('', [
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
      },
      { validators: FormValidators.emailOrNumberRequired }
    );

    this.issuersService.getAll().subscribe((result) => (this.issuers = result));
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
