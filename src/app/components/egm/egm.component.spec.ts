import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgmComponent } from './egm.component';

describe('EgmComponent', () => {
  let component: EgmComponent;
  let fixture: ComponentFixture<EgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
