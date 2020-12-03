import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitBannerComponent } from './split-banner.component';

describe('SplitBannerComponent', () => {
  let component: SplitBannerComponent;
  let fixture: ComponentFixture<SplitBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
