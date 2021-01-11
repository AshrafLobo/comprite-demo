import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRegistrationComponent } from './share-registration.component';

describe('ShareRegistrationComponent', () => {
  let component: ShareRegistrationComponent;
  let fixture: ComponentFixture<ShareRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
