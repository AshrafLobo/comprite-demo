import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTestimonialsComponent } from './company-testimonials.component';

describe('CompanyTestimonialsComponent', () => {
  let component: CompanyTestimonialsComponent;
  let fixture: ComponentFixture<CompanyTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
