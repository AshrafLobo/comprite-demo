import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payroll-form',
  templateUrl: './payroll-form.component.html',
  styleUrls: ['./payroll-form.component.scss'],
})
export class PayrollFormComponent implements OnInit {
  siteKey = '6Lc6ejsaAAAAAI_N3NxRd7Iiu_JoXVmzncrr1z0o';
  payrollForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.payrollForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      ]),
      company: new FormControl('', Validators.required),
      jobTitle: new FormControl(''),
      numberOfEmployees: new FormControl('', Validators.pattern('[0-9]+')),
      enquireAbout: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      // recaptchaReactive: new FormControl(null, Validators.required),
    });
  }

  // Get form controls
  get firstName() {
    return this.payrollForm.get('firstName');
  }

  get lastName() {
    return this.payrollForm.get('lastName');
  }

  get email() {
    return this.payrollForm.get('email');
  }

  get phoneNumber() {
    return this.payrollForm.get('phoneNumber');
  }

  get company() {
    return this.payrollForm.get('company');
  }

  get numberOfEmployees() {
    return this.payrollForm.get('numberOfEmployees');
  }

  get enquireAbout() {
    return this.payrollForm.get('enquireAbout');
  }

  get message() {
    return this.payrollForm.get('message');
  }

  // Submit form fuction
  submit() {
    let values = this.payrollForm.value;

    for (let key in this.payrollForm.value) {
      if (values[key] === '' || values[key] === null) {
        delete values[key];
      }
    }

    // console.log(JSON.stringify(values));
    console.log(this.payrollForm.value);
    this.payrollForm.reset();

    // Clear control validations
    this.firstName.clearValidators();
    this.firstName.updateValueAndValidity();
    this.lastName.clearValidators();
    this.lastName.updateValueAndValidity();
    this.email.clearValidators();
    this.email.updateValueAndValidity();
    this.phoneNumber.clearValidators();
    this.phoneNumber.updateValueAndValidity();
    this.company.clearValidators();
    this.company.updateValueAndValidity();
    this.enquireAbout.clearValidators();
    this.enquireAbout.updateValueAndValidity();
    this.message.clearValidators();
    this.message.updateValueAndValidity();
  }
}
