import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingPeriodComponent } from './selling-period.component';

describe('SellingPeriodComponent', () => {
  let component: SellingPeriodComponent;
  let fixture: ComponentFixture<SellingPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
