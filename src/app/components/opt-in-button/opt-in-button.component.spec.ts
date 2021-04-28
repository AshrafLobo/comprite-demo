import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptInButtonComponent } from './opt-in-button.component';

describe('OptInButtonComponent', () => {
  let component: OptInButtonComponent;
  let fixture: ComponentFixture<OptInButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptInButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptInButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
