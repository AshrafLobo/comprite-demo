import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRegistrationFormComponent } from './share-registration-form.component';

describe('ShareRegistrationFormComponent', () => {
  let component: ShareRegistrationFormComponent;
  let fixture: ComponentFixture<ShareRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
