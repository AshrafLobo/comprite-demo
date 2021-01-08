import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTestimonialCardComponent } from './company-testimonial-card.component';

describe('CompanyTestimonialCardComponent', () => {
  let component: CompanyTestimonialCardComponent;
  let fixture: ComponentFixture<CompanyTestimonialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTestimonialCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTestimonialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
