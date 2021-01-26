import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollPaymentDialogComponent } from './payroll-payment-dialog.component';

describe('PayrollPaymentDialogComponent', () => {
  let component: PayrollPaymentDialogComponent;
  let fixture: ComponentFixture<PayrollPaymentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollPaymentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
