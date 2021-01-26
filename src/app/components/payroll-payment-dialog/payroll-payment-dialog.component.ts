import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payroll-payment-dialog',
  templateUrl: './payroll-payment-dialog.component.html',
  styleUrls: ['./payroll-payment-dialog.component.scss'],
})
export class PayrollPaymentDialogComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
