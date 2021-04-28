import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyErrorStateMatcher } from 'src/app/common/error-state-matcher';
import { emailOrNumberRequired } from 'src/app/common/form.validators';
import { PayrollDownloadFormService } from 'src/app/services';

@Component({
  selector: 'app-payroll-submission-form',
  templateUrl: './payroll-submission-form.component.html',
  styleUrls: ['./payroll-submission-form.component.scss'],
})
export class PayrollSubmissionFormComponent implements OnInit {
  siteKey = '6Lc6ejsaAAAAAI_N3NxRd7Iiu_JoXVmzncrr1z0o';
  payrollForm: FormGroup;
  @Input('activeModal') activeModal;
  matcher;

  constructor(
    private service: PayrollDownloadFormService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.matcher = new MyErrorStateMatcher();

    this.payrollForm = new FormGroup(
      {
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email]),
        phoneNumber: new FormControl('', [
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
        ]),
        company: new FormControl('', Validators.required),
        numberOfEmployees: new FormControl('', [Validators.pattern('[0-9]+')]),
        //recaptchaReactive: new FormControl(null, Validators.required),
      },
      { validators: emailOrNumberRequired }
    );
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

  // Submit form fuction
  submit() {
    let values = this.payrollForm.value;

    for (let key in this.payrollForm.value) {
      if (values[key] === '' || values[key] === null) {
        delete values[key];
      }
    }

    this.service.create(values).subscribe((resource) => {
      if (resource && resource !== null) {
        // Clear form control validations
        for (let key in this.payrollForm.controls) {
          this.payrollForm.controls[key].clearValidators();
          this.payrollForm.controls[key].updateValueAndValidity;
        }

        this.payrollForm.reset();
        this.activeModal.close();

        this._snackBar.open('Message sent successfully', '', {
          duration: 5000,
          panelClass: ['success-snackbar'],
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });

        window.open('../../assets/downloads/B261 Pay100 Plus Setup.exe');
      }
    });
  }
}
