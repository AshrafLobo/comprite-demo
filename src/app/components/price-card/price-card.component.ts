import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayrollPaymentDialogComponent } from '../payroll-payment-dialog/payroll-payment-dialog.component';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openDialog() {
    this.modalService.open(PayrollPaymentDialogComponent, {
      size: 'lg',
    });
  }
}
