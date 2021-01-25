import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../../common/form.validators';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss'],
})
export class EnquiryFormComponent implements OnInit {
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
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      ]),
    }),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
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

  get subject() {
    return this.form.get('subject');
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
