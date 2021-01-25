import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollSubmissionFormComponent } from './payroll-submission-form.component';

describe('PayrollSubmissionFormComponent', () => {
  let component: PayrollSubmissionFormComponent;
  let fixture: ComponentFixture<PayrollSubmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollSubmissionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollSubmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
