import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../../common/form.validators';

@Component({
  selector: 'app-share-registration-form',
  templateUrl: './share-registration-form.component.html',
  styleUrls: ['./share-registration-form.component.scss'],
})
export class ShareRegistrationFormComponent implements OnInit {
  siteKey = '6Lc6ejsaAAAAAI_N3NxRd7Iiu_JoXVmzncrr1z0o';

  form = new FormGroup({
    userDetails: new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        FormValidators.cannotContainSpace,
      ]),
      lastName: new FormControl('', [
        Validators.required,
        FormValidators.cannotContainSpace,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      ]),
      id: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      cdsc: new FormControl(''),
    }),
    company: new FormControl(''),
    enquireAbout: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    recaptchaReactive: new FormControl(null, Validators.required),
  });

  // Get form controls
  get firstName() {
    return this.form.get('userDetails.firstName');
  }

  get lastName() {
    return this.form.get('userDetails.lastName');
  }

  get email() {
    return this.form.get('userDetails.email');
  }

  get phoneNumber() {
    return this.form.get('userDetails.phoneNumber');
  }

  get id() {
    return this.form.get('userDetails.id');
  }

  get company() {
    return this.form.get('companyDetails.company');
  }

  get enquireAbout() {
    return this.form.get('enquireAbout');
  }

  get message() {
    return this.form.get('message');
  }

  // Submit form fuction
  submit() {
    console.log(this.form.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
