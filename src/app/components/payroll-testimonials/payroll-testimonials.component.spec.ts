import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTestimonialsComponent } from './payroll-testimonials.component';

describe('TestimonialsComponent', () => {
  let component: PayrollTestimonialsComponent;
  let fixture: ComponentFixture<PayrollTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrollTestimonialsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
