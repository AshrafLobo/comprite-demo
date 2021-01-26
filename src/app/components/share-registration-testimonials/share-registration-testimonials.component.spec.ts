import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRegistrationTestimonialsComponent } from './share-registration-testimonials.component';

describe('ShareRegistrationTestimonialsComponent', () => {
  let component: ShareRegistrationTestimonialsComponent;
  let fixture: ComponentFixture<ShareRegistrationTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareRegistrationTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareRegistrationTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
