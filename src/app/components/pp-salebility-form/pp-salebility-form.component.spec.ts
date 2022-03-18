import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPSaleabilityFormComponent } from './pp-salebility-form.component';

describe('PPSaleabilityFormComponent', () => {
  let component: PPSaleabilityFormComponent;
  let fixture: ComponentFixture<PPSaleabilityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPSaleabilityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPSaleabilityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
