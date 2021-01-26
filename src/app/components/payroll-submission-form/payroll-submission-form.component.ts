import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../../common/form.validators';

@Component({
  selector: 'app-payroll-submission-form',
  templateUrl: './payroll-submission-form.component.html',
  styleUrls: ['./payroll-submission-form.component.scss'],
})
export class PayrollSubmissionFormComponent implements OnInit {
  siteKey = '6Lc6ejsaAAAAAI_N3NxRd7Iiu_JoXVmzncrr1z0o';

  constructor() {}

  ngOnInit(): void {}

  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      FormValidators.cannotContainSpace,
    ]),
    lastName: new FormControl('', [
      Validators.required,
      FormValidators.cannotContainSpace,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
    ]),
    company: new FormControl('', Validators.required),
    numberOfEmployees: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    recaptchaReactive: new FormControl(null, Validators.required),
  });

  // Get form controls
  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  get company() {
    return this.form.get('company');
  }

  get numberOfEmployees() {
    return this.form.get('numberOfEmployees');
  }

  // Submit form fuction
  submit() {
    console.log(this.form.value);
    window.open('../../assets/downloads/B261 Pay100 Plus Setup.exe');
  }
}
