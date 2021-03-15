import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUsFormService } from 'src/app/services';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss'],
})
export class EnquiryFormComponent implements OnInit {
  siteKey = '6Lc6ejsaAAAAAI_N3NxRd7Iiu_JoXVmzncrr1z0o';
  contactForm: FormGroup;

  constructor(
    private service: ContactUsFormService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
      ]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      // recaptchaReactive: new FormControl(null, Validators.required),
    });
  }

  // Get form controls
  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  // Submit form fuction
  submit() {
    let values = this.contactForm.value;

    for (let key in this.contactForm.value) {
      if (values[key] === '' || values[key] === null) {
        delete values[key];
      }
    }

    this.service.create(values).subscribe((resource) => {
      if (resource && resource !== null) {
        this._snackBar.open('Message sent successfully', '', {
          duration: 5000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });

        // Clear form control validations
        for (let key in this.contactForm.controls) {
          this.contactForm.controls[key].clearValidators();
          this.contactForm.controls[key].updateValueAndValidity;
        }

        this.contactForm.reset();
      }
    });
  }
}
