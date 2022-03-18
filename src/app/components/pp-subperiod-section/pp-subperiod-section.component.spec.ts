import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPSubperiodSectionComponent } from './pp-subperiod-section.component';

describe('PPSubperiodSectionComponent', () => {
  let component: PPSubperiodSectionComponent;
  let fixture: ComponentFixture<PPSubperiodSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPSubperiodSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPSubperiodSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
